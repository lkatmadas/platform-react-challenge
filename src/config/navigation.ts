import { ROUTES } from '@/routes/constants'

export type NavLink = {
  label: string
  path: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Cats', path: ROUTES.HOME },
  { label: 'Breeds', path: ROUTES.BREEDS },
  { label: 'Favourites', path: ROUTES.FAVOURITES },
]
