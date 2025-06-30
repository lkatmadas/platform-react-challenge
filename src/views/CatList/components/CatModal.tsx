import { type FC } from 'react'

import { Modal, Text, Heading, Grid, Button, Skeletons } from '@components'
import { BreedStatsItem, LabelValue } from '@views/CatList/components'

import Styled from './CatModal.styles'

import { useIsCatFavourited, useMarkCatAsFavourite } from '@/api/cats/cats.query'
import { breedRatings } from '@views/CatList/constants'
import type { CatModalProps } from './types'

const CatModal: FC<CatModalProps> = ({ cat, isError, isLoading, onClose }) => {
  let favouriteLabel = 'Mark as Favourite'

  const breed = cat?.breeds?.[0]
  const { mutate, isSuccess, isPending } = useMarkCatAsFavourite()
  const { data: existingFavourite, isLoading: isCheckingFavourite } = useIsCatFavourited(cat?.id)
  const isFavourited = !!existingFavourite

  const { FeaturedImageWrapper, FeaturedImage, CatInformation, Link } = Styled

  if (isCheckingFavourite) {
    favouriteLabel = 'Checking...'
  } else if (isSuccess || isFavourited) {
    favouriteLabel = 'Favourited!'
  }

  return (
    <Modal isOpen={!!cat} onClose={onClose} ariaLabel={`Preview cat ${cat}`}>
      <Skeletons.Loader error={isError} status={isLoading} loader={<Skeletons.Card />}>
        {cat && (
          <FeaturedImageWrapper>
            <FeaturedImage
              src={cat.url}
              alt="Cat"
              width={cat.width}
              height={cat.height}
              loading="lazy"
            />

            <Button
              className="fav-action"
              variant="primary"
              disabled={isPending || isSuccess || isFavourited}
              onClick={() => mutate({ image_id: cat.id })}
              testId="favourite-cat-action"
              data-cat-id={cat.id}
            >
              {favouriteLabel}
            </Button>
          </FeaturedImageWrapper>
        )}
      </Skeletons.Loader>

      <CatInformation>
        {breed ? (
          <Grid columns={1} gap="1rem" key={breed.id}>
            <div>
              <Heading level="h2">{breed.name}</Heading>
              {breed.id && (
                <Text as="span">
                  <Link href={`/breeds?breed=${breed.id}`}>(visit breed gallery)</Link>
                </Text>
              )}
            </div>

            <Text as="p">{breed.description}</Text>
            {breed.wikipedia_url && (
              <Link href={breed.wikipedia_url} target="_blank" rel="noopener noreferrer">
                Learn more
              </Link>
            )}
            <LabelValue label="Origin:" className="flex">
              {breed.origin}
            </LabelValue>
            <LabelValue label="Temperament:" className="flex">
              {breed.temperament}
            </LabelValue>
            <Grid columns={2} gap="1rem">
              <LabelValue label="Life Span:" className="flex">
                {breed.life_span}
              </LabelValue>
              <LabelValue label="Weight:" className="flex">
                {breed.weight.imperial}
              </LabelValue>
            </Grid>
            <Grid columns={2} gap="1rem">
              {breedRatings.map(({ key, label }) => {
                const value = breed?.[key]
                if (value === undefined) return null

                return <BreedStatsItem key={key} label={label} value={value} />
              })}
            </Grid>
          </Grid>
        ) : (
          <Text as="p" className="center">
            No cat details available.
          </Text>
        )}
      </CatInformation>
    </Modal>
  )
}

export default CatModal
