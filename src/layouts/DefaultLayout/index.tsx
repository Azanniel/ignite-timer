import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

import { BoxContainer, LayoutContainer } from './styles'

export default function DefaultLayout() {
  return (
    <LayoutContainer>
      <BoxContainer>
        <Header />
        <Outlet />
      </BoxContainer>
    </LayoutContainer>
  )
}
