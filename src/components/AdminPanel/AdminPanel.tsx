import React from 'react'
import { ContainerAdmin, ContainerLogo, ContainerMenu } from './Admin.styled'
import LogoAdmin from '../../assets/logo-roxo.png'
import IconUser from '../../assets/icon-user.png'
import IconSearch from '../../assets/icon-search.png'

export const AdminPanel = () => {
  return (
    <>
      <ContainerAdmin>
        <ContainerLogo>
          <img src={LogoAdmin} alt="Imagem logo" />
          <h5>Admin Panel</h5>
        </ContainerLogo>
        <ContainerMenu>
          <p>Menu</p>
          <p>
            {' '}
            <i>
              <img src={IconUser} alt="" />
            </i>{' '}
            Lista de usuários
          </p>
          <p>
            <i>
              <img src={IconSearch} alt="" />
            </i>
            Pesquisar por CPF
          </p>
        </ContainerMenu>
      </ContainerAdmin>
    </>
  )
}
