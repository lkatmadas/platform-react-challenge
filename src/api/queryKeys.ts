export const queryKeys = {
  cats: {
    all: ['cats'] as const,
    paginated: (limit: number) => ['cats', 'paginated', limit] as const,
    image: (id: string) => ['cats', 'image', id] as const,
    breeds: () => ['cats', 'breeds'] as const,
    breedImages: (breedId: string) => ['cats', 'breeds', breedId] as const,
    favourites: () => ['cats', 'favourites'] as const,
    isFavourited: (imageId: string) => ['cats', 'is-favourited', imageId] as const,
  },
}
