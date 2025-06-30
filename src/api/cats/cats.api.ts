import { apiClient } from '@/api/client'
import { API_ENDPOINTS, dynamicEndpoints } from '@/api/endpoints'
import type { CatImage, FavouriteCatRequest, FavouriteCat, Breed } from './cats.types'

// pagination helper
export const getNextPageParam = (_lastPage: CatImage[], allPages: CatImage[][]) => allPages.length

export const fetchRandomCats = async ({
  pageParam = 0,
  limit = 10,
}: {
  pageParam?: number
  limit?: number
}): Promise<CatImage[]> => {
  const url = dynamicEndpoints.randomCats({ page: pageParam, limit })
  const { data } = await apiClient.get<CatImage[]>(url)
  return data
}

export const fetchBreeds = (params: { limit?: number; page?: number }) =>
  apiClient.get<Breed[]>(dynamicEndpoints.breeds(params))

export const fetchCatImageById = async (id: string): Promise<CatImage> => {
  const response = await apiClient.get(API_ENDPOINTS.images.byId(id))
  return response.data
}

export const fetchBreedImages = async (breedId: string, limit = 10) => {
  const response = await apiClient.get(API_ENDPOINTS.images.search, {
    params: {
      limit,
      breed_ids: breedId,
    },
  })
  return response.data
}

export const postFavouriteCatImage = async ({
  image_id,
  sub_id = 'guest-user',
}: FavouriteCatRequest) => {
  const response = await apiClient.post(API_ENDPOINTS.favourites.create, {
    image_id,
    sub_id,
  })
  return response.data
}

export const fetchFavouriteCats = async (): Promise<FavouriteCat[]> => {
  const { data } = await apiClient.get(API_ENDPOINTS.favourites.list)
  return data
}

export const deleteFavouriteCatImage = async (favouriteId: number | string) => {
  const { data } = await apiClient.delete(API_ENDPOINTS.favourites.delete(favouriteId))
  return data
}

export const getFavouriteByImageId = async (imageId: string): Promise<FavouriteCat | undefined> => {
  const { data } = await apiClient.get<FavouriteCat[]>(API_ENDPOINTS.favourites.list)
  return data.find(fav => fav.image_id === imageId)
}
