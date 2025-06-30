import { CatList, CatBreeds, CatFavourites } from '@views'
import { ROUTES } from './constants'

export const appRoutes = [
  {
    path: ROUTES.HOME,
    element: CatList,
    index: true,
  },

  {
    path: ROUTES.BREEDS,
    element: CatBreeds,
    index: false,
  },

  {
    path: ROUTES.FAVOURITES,
    element: CatFavourites,
    index: false,
  },
]
