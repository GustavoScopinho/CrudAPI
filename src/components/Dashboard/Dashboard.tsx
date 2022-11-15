import React, { useState, useContext } from 'react'
import {
  ContainerDashboard,
  ContainerTitulo,
  ContainerUsuarios
} from './Dashboard.styled'
import IconMenu from '../../assets/icon-menu.png'
import IconLapis from '../../assets/icon-lapis.png'
import IconLixeira from '../../assets/icon-lixeira.png'
import { ModalAdicionar } from '../ModalAdicionar/ModalAdicionar'
import { INewUser } from '../../utilidades/interface'
import { getContext } from '../../context/getContext'
import { GoThreeBars } from 'react-icons/go'

export const Dashboard = () => {
  const { dadosAPI } = useContext(getContext)

  const [modal, setModal] = useState<boolean>(false)
  const [modalEditar, setModalEditar] = useState<boolean>(false)

  const [editCPF, setEditCPF] = useState<string>('')

  const handleEdit = (cpf: string) => {
    setEditCPF(cpf)
    setModalEditar(true)
  }

  console.log(modal)
  return (
    <>
      <ContainerDashboard>
        <div>
          <div className="container-logo">
            <GoThreeBars size={25} className="iconMenu" />
          </div>
          <ContainerTitulo>
            <h2>LISTA DE USUÁRIOS</h2>
          </ContainerTitulo>
        </div>
        <ContainerUsuarios>
          <div className="ContainerMenorUsuarios">
            <div className="FirstContainer">
              <h3>Usuários</h3>
              <button
                onClick={() => setModal(true)}
                className="botaoAdicionarUsuario"
              >
                Adicionar usuário{' '}
              </button>
            </div>
            <table>
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>RG</th>
                <th>CNH</th>
                <th>Nome da mãe</th>
                <th>Nome do pai</th>
                <th>Título de eleitor</th>
                <th>Sexo</th>
                <th>Ações</th>
              </tr>
              {dadosAPI.map((user: any) => {
                return (
                  <tr>
                    <td>{user.nome}</td>
                    <td>{user.cpf}</td>
                    <td>{user.rg}</td>
                    <td>{user.cnh}</td>
                    <td>{user.nomeMae}</td>
                    <td>{user.nomePai}</td>
                    <td>{user.tituloEleitor}</td>
                    <td>{user.sexo}</td>
                    <td className="container-botao">
                      <button>
                        {' '}
                        <i>
                          <img
                            src={IconLapis}
                            onClick={() => handleEdit(user.cpf)}
                            alt=""
                          />
                        </i>
                      </button>{' '}
                      <button>
                        {' '}
                        <i>
                          <img src={IconLixeira} alt="" />
                        </i>{' '}
                      </button>
                    </td>
                  </tr>
                )
              })}
            </table>
          </div>
        </ContainerUsuarios>
        <ModalAdicionar isOpen={modal} onRequestClose={() => setModal(false)} />
        <ModalAdicionar
          isOpen={modalEditar}
          onRequestClose={() => setModalEditar(false)}
          type={1}
          cpf={editCPF}
        />
      </ContainerDashboard>
    </>
  )
}
