import { lazy } from 'react'

export const CatList = lazy(() => import('./CatList/CatList'))
export const CatBreeds = lazy(() => import('./CatBreeds/CatBreeds'))
export const CatFavourites = lazy(() => import('./CatFavourites/CatFavourites'))
