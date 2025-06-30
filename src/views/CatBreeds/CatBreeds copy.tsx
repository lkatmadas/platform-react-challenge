import { useState, type FC } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import debounce from 'lodash.debounce'

import { Heading, Button, ViewWrapper, Grid, Skeletons } from '@/components'
import { Thumbnail, BreedsModal } from '@views/CatBreeds/components/'

import Styled from './CatBreeds.styles'

import { useBreedImages, useBreeds } from '@/api/cats/cats.query'
import type { CatImage } from '@/api/cats/cats.types'
import queryClient from '@/api/queryClient'
import { queryKeys } from '@/api/queryKeys'
import { fetchBreedImages } from '@/api/cats/cats.api'

const CatBreeds: FC = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedBreedIdParams = searchParams.get('breed') ?? undefined

  const { CatBreeds, CatBreedItem } = Styled
  const [selectedBreedId, setSelectedBreedId] = useState<string | null>(null)

  const {
    data: breeds,
    isLoading: isBreedsLoading,
    isError: isBreedsError,
    refetch: refetchBreeds,
  } = useBreeds()
  const { data: breedImages, isLoading: isBreedImagesLoading } = useBreedImages(
    selectedBreedId ?? selectedBreedIdParams,
  )
  const handleBreedClick = (breedId: string) => {
    setSelectedBreedId(breedId)
    setSearchParams({ breed: breedId })
  }

  const handleCloseModal = () => {
    searchParams.delete('breed')
    setSearchParams(searchParams)
    setSelectedBreedId(null)
  }

  const handleSelectCat = (cat: CatImage) => {
    navigate(`/?cat=${cat.id}`)
  }

  const renderCardActions = (cat: CatImage) => (
    <Button
      onClick={e => {
        e.stopPropagation()
        handleSelectCat(cat)
      }}
    >
      View
    </Button>
  )

  const handleHover = async (breedId: string) => {
    const data: CatImage[] = await queryClient.fetchQuery({
      queryKey: queryKeys.cats.breedImages(breedId),
      queryFn: () => fetchBreedImages(breedId),
    })

    // Preload the actual image URLs
    data.forEach(img => {
      const preloadImg = new Image()
      preloadImg.src = img.url
    })
  }
  const debouncedHover = debounce(handleHover, 200)

  return (
    <>
      <CatBreeds>
        <ViewWrapper
          isLoading={isBreedsLoading}
          isError={isBreedsError}
          onRetry={refetchBreeds}
          pageTitle="Cat Breeds"
        >
          <Skeletons.Loader
            error={isBreedsError}
            status={isBreedsLoading}
            loader={<Skeletons.Grid count={4} columns={4} height={89} />}
          >
            <Grid as="ul" columns={4}>
              {breeds?.map(breed => (
                <CatBreedItem
                  key={breed.id}
                  onClick={() => handleBreedClick(breed.id)}
                  onMouseEnter={() => debouncedHover(breed.id)}
                  data-testid="cat-breed-item"
                >
                  <Thumbnail image={breed.image} />
                  <Heading level="h2" size="xs">
                    {breed.name}
                  </Heading>
                </CatBreedItem>
              ))}
            </Grid>
          </Skeletons.Loader>
        </ViewWrapper>
      </CatBreeds>

      {selectedBreedId && (
        <BreedsModal
          isLoading={isBreedImagesLoading}
          isError={isBreedsError}
          images={breedImages ?? []}
          onClose={handleCloseModal}
          actions={renderCardActions}
        />
      )}
    </>
  )
}

export default CatBreeds
