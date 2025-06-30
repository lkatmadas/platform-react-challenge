import { useInfiniteQuery, useMutation, useQueryClient, useQuery } from '@tanstack/react-query'

import {
  fetchBreedImages,
  fetchCatImageById,
  fetchRandomCats,
  fetchBreeds,
  postFavouriteCatImage,
  fetchFavouriteCats,
  deleteFavouriteCatImage,
  getFavouriteByImageId,
} from '@/api/cats/cats.api'
import { queryKeys } from '@/api/queryKeys'
import type { Breed, CatImage } from '@/api/cats/cats.types'

export const usePaginatedCats = (limit: number = 10) => {
  return useInfiniteQuery<CatImage[], Error>({
    queryKey: queryKeys.cats.paginated(limit),
    queryFn: ({ pageParam = 0 }) => fetchRandomCats({ pageParam: pageParam as number, limit }),
    initialPageParam: 0,
    getNextPageParam: (_lastPage, allPages) => allPages.length,
    refetchOnWindowFocus: false,
  })
}

export const useBreeds = (limit?: number, page = 0) =>
  useQuery<Breed[]>({
    queryKey: queryKeys.cats.breeds(),
    queryFn: () => fetchBreeds({ limit, page }).then(res => res.data),
    staleTime: 1000 * 60 * 60 * 6, // 6 hours
    gcTime: 1000 * 60 * 60 * 12, // 12 hours
    refetchOnWindowFocus: false,
  })

export const useCatImage = (id?: string) =>
  useQuery<CatImage>({
    queryKey: queryKeys.cats.image(id ?? ''),
    queryFn: () => fetchCatImageById(id!),
    enabled: !!id,
  })

export const useBreedImages = (breedId?: string) =>
  useQuery<CatImage[]>({
    queryKey: queryKeys.cats.breedImages(breedId ?? ''),
    queryFn: () => fetchBreedImages(breedId!),
    enabled: !!breedId,
    staleTime: 1000 * 60 * 5, // 5 minutes of freshness
    refetchOnWindowFocus: false,
  })

export const useMarkCatAsFavourite = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: postFavouriteCatImage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.cats.favourites() })
    },
    onError: error => {
      console.error('Failed to favourite image:', error.message)
    },
  })
}

export const useFavouriteCatsList = () =>
  useQuery({
    queryKey: queryKeys.cats.favourites(),
    queryFn: fetchFavouriteCats,
  })

export const useDeleteFavouriteCat = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteFavouriteCatImage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.cats.favourites() })
    },
  })
}

export const useIsCatFavourited = (imageId?: string) =>
  useQuery({
    queryKey: queryKeys.cats.isFavourited(imageId ?? ''),
    queryFn: () => getFavouriteByImageId(imageId!),
    enabled: !!imageId,
  })
