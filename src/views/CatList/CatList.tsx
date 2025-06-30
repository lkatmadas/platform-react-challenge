import { useEffect, useRef, useState, type FC } from 'react'
import { useSearchParams } from 'react-router-dom'
import debounce from 'lodash.debounce'

import { Button, Skeletons, ViewWrapper } from '@components'
import { CatModal, CatGrid } from '@views/CatList/components'

import Styled from './CatList.styles.ts'

import { useCatImage, usePaginatedCats } from '@/api/cats/cats.query'
import queryClient from '@/api/queryClient.ts'
import { queryKeys } from '@/api/queryKeys.ts'
import { fetchCatImageById } from '@/api/cats/cats.api.ts'

import type { CatImage } from '@/api/cats/cats.types.ts'

const CatList: FC = () => {
  const { CatListWrapper } = Styled
  const { data, isLoading, isError, refetch, fetchNextPage, hasNextPage, isFetchingNextPage } =
    usePaginatedCats(10)

  const [searchParams, setSearchParams] = useSearchParams()
  const selectedCatId = searchParams.get('cat') ?? undefined

  const cats = data?.pages.flat() ?? []
  const [selectedCat, setSelectedCat] = useState<CatImage | null>(null)
  const [isModalDismissed, setIsModalDismissed] = useState(false)
  const { data: fallbackCat = null, isLoading: isFetchingFallbackCat } = useCatImage(selectedCatId)

  const debouncedHoverRef = useRef(
    debounce(async (cat: CatImage) => {
      const data = await queryClient.fetchQuery({
        queryKey: queryKeys.cats.image(cat.id),
        queryFn: () => fetchCatImageById(cat.id),
      })

      if (data?.url) {
        const img = new Image()
        img.src = data.url
      }
    }, 150),
  )

  const handleCardHover = debouncedHoverRef.current

  useEffect(() => {
    const debouncedFn = debouncedHoverRef.current

    return () => {
      debouncedFn.cancel()
    }
  }, [])

  const handleSelectCat = (cat: CatImage) => {
    const catId = cat.id
    setSearchParams(new URLSearchParams({ cat: catId }))
    setSelectedCat(cat)
    setIsModalDismissed(false)
  }

  const handleCloseModal = () => {
    const newParams = new URLSearchParams(searchParams)
    newParams.delete('cat')
    setSearchParams(newParams)
    setSelectedCat(null)
    setIsModalDismissed(true)
  }

  useEffect(() => {
    if (fallbackCat && !selectedCat && !isModalDismissed) {
      setSelectedCat(fallbackCat)
    }
  }, [fallbackCat, selectedCat, isModalDismissed])

  useEffect(() => {
    if (selectedCatId) {
      setIsModalDismissed(false)
    }
  }, [selectedCatId])

  return (
    <>
      <CatListWrapper data-testid="cat-list-wrapper">
        <ViewWrapper
          isLoading={isLoading}
          isError={isError}
          onRetry={refetch}
          pageTitle="Cats List"
        >
          <Skeletons.Loader
            error={isError}
            status={isLoading}
            loader={<Skeletons.Grid count={10} columns={5} />}
          >
            <CatGrid
              cats={cats}
              onSelect={handleSelectCat}
              onCardHover={handleCardHover}
              actions={cat => (
                <Button size="small" onClick={() => handleSelectCat(cat)} testId="preview-cat">
                  Preview
                </Button>
              )}
            />
          </Skeletons.Loader>

          {isFetchingNextPage && <Skeletons.Grid count={10} columns={5} />}

          {hasNextPage && (
            <Button
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              testId="load-more-cats-btn"
            >
              {isFetchingNextPage ? 'Loading more cats...' : 'Load More Cats'}
            </Button>
          )}
        </ViewWrapper>
      </CatListWrapper>

      {(selectedCat || fallbackCat) && (
        <CatModal
          cat={selectedCat || fallbackCat}
          onClose={handleCloseModal}
          isError={isError}
          isLoading={isLoading || isFetchingFallbackCat}
        />
      )}
    </>
  )
}

export default CatList
