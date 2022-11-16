import React from 'react'
import { ContainerAdmin, ContainerLogo, ContainerMenu } from './Admin.styled'
import LogoAdmin from '../../assets/logo-roxo.png'
import { FcBusinessman } from 'react-icons/fc'
import { FcSearch } from 'react-icons/fc'

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
              <FcBusinessman size={25} className="iconPeople" />
            </i>{' '}
            Lista de usuários
          </p>
          <p>
            <i>
              <FcSearch size={25} className="iconSearch" />
            </i>
            Pesquisar por CPF
          </p>
        </ContainerMenu>
      </ContainerAdmin>
    </>
  )
}
