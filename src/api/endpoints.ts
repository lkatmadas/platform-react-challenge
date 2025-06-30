type RandomCatParams = {
  page?: number
  limit?: number
  order?: 'RANDOM' | 'ASC' | 'DESC'
  size?: 'thumb' | 'small' | 'med' | 'full'
  mime_types?: string
}

export const API_ENDPOINTS = {
  images: {
    search: 'images/search',
    byId: (id: string) => `images/${id}`,
  },
  breeds: {
    list: 'breeds',
  },
  favourites: {
    list: 'favourites',
    create: 'favourites',
    delete: (favouriteId: number | string) => `favourites/${favouriteId}`,
  },
}
export const dynamicEndpoints = {
  randomCats: ({
    page = 0,
    limit = 10,
    order = 'RANDOM',
    size = 'med',
    mime_types = 'jpg',
  }: RandomCatParams) =>
    `${API_ENDPOINTS.images.search}?limit=${limit}&page=${page}&has_breeds=true&order=${order}&size=${size}&mime_types=${mime_types}&format=json`,

  breeds: ({ limit, page = 0 }: { limit?: number; page?: number } = {}) => {
    const searchParams = new URLSearchParams()
    if (limit !== undefined) searchParams.append('limit', String(limit))
    if (page !== undefined) searchParams.append('page', String(page))
    return `${API_ENDPOINTS.breeds.list}?${searchParams.toString()}`
  },
}
