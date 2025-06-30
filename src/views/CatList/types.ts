import type { Breed } from '@/api/cats/cats.types'

export type BreedRatingKey = keyof Pick<
  Breed,
  | 'adaptability'
  | 'affection_level'
  | 'child_friendly'
  | 'dog_friendly'
  | 'energy_level'
  | 'experimental'
  | 'grooming'
  | 'hairless'
  | 'health_issues'
  | 'hypoallergenic'
  | 'indoor'
  | 'intelligence'
  | 'lap'
  | 'shedding_level'
  | 'short_legs'
  | 'social_needs'
  | 'stranger_friendly'
  | 'suppressed_tail'
  | 'vocalisation'
>
