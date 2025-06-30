import { Suspense, type FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Loader, Header } from '@/components'

import Styled from './LayoutWrapper.styles'

const LayoutWrapper: FC = () => {
  const { LayoutWrapper } = Styled

  return (
    <Suspense fallback={<Loader />}>
      <LayoutWrapper>
        <Header />
        <main className="main-content" role="main">
          <Outlet />
        </main>
      </LayoutWrapper>
    </Suspense>
  )
}

export default LayoutWrapper
