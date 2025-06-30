import { type FC } from 'react'

import { Button, CardItem, Grid, Skeletons, ViewWrapper } from '@/components'
import Styled from '@/views/CatFavourites/CatFavourites.styles'

import { useDeleteFavouriteCat, useFavouriteCatsList } from '@/api/cats/cats.query'

const CatFavourites: FC = () => {
  const { CatFavourites } = Styled
  const {
    data: favouriteCats,
    isLoading,
    isError,
    refetch: refetchFavCats,
  } = useFavouriteCatsList()
  const { mutate: deleteFavourite, isPending: isDeleting } = useDeleteFavouriteCat()

  const renderDeleteButton = (favId: number) => {
    return (
      <Button onClick={() => deleteFavourite(favId)} disabled={isDeleting}>
        {isDeleting ? 'Removing...' : 'Remove'}
      </Button>
    )
  }

  return (
    <CatFavourites>
      <ViewWrapper
        isLoading={isLoading}
        isError={isError}
        onRetry={refetchFavCats}
        pageTitle="Favourite Cats"
      >
        <Skeletons.Loader
          error={isError}
          status={isLoading}
          loader={<Skeletons.Grid count={10} columns={5} />}
        >
          {favouriteCats?.length && (
            <Grid columns={5}>
              {favouriteCats.map(favCat => (
                <CardItem
                  key={favCat.id}
                  item={favCat.image}
                  actions={() => renderDeleteButton(favCat.id)}
                  data-testid="favourite-cat"
                />
              ))}
            </Grid>
          )}
        </Skeletons.Loader>
      </ViewWrapper>
    </CatFavourites>
  )
}

export default CatFavourites
