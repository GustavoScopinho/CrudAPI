import React from 'react'
import { AdminPanel } from '../../components/AdminPanel/AdminPanel'
import { Dashboard } from '../../components/Dashboard/Dashboard'
import { ContainerHome } from './Home.styled'

export const Home = () => {
  return (
    <ContainerHome>
      <AdminPanel />
      <Dashboard />
    </ContainerHome>
  )
}
