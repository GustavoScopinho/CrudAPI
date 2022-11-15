import React, { useState, useContext, useEffect } from 'react'
import {
  ContainerDashboard,
  ContainerTitulo,
  ContainerUsuarios
} from './Dashboard.styled'
import IconMenu from '../../assets/icon-menu.png'
import IconLapis from '../../assets/icon-lapis.png'
import IconLixeira from '../../assets/icon-lixeira.png'
import { ModalAdicionar } from '../ModalAdicionar/ModalAdicionar'
import { INewUser, INewUserContext } from '../../utilidades/interface'
import { getContext } from '../../context/getContext'
import { GoThreeBars } from 'react-icons/go'
import { BiSearchAlt } from 'react-icons/bi'
import { delContext } from '../../context/delContext'

export const Dashboard = () => {
  const { dadosAPI } = useContext(getContext)

  const [modal, setModal] = useState<boolean>(false)
  const [modalEditar, setModalEditar] = useState<boolean>(false)

  // const [editCPF, setEditCPF] = useState<string>('')
  // const [editNome, setEditNome] = useState<string>('')

  const [dados, setDados] = useState<any>()

  const handleEdit = (e: string) => {
    setModalEditar(true)
    setDados(e)
  }

  useEffect(() => {
    console.log(dados)
  }, [dados])

  const { deletarUsuario } = useContext(delContext)

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
              <div className="ContainerSearch">
                <input
                  type="text"
                  placeholder="Filtre o usuário pelo CPF"
                  name=""
                  id=""
                />{' '}
                <BiSearchAlt className="IconSearch" size={30} />
              </div>
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
                            onClick={() => handleEdit(user)}
                            alt=""
                          />
                        </i>
                      </button>{' '}
                      <button>
                        {' '}
                        <i>
                          <img
                            src={IconLixeira}
                            onClick={() => deletarUsuario(user.cpf)}
                            alt=""
                          />
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
          cpf={dados?.cpf}
          nome={dados?.nome}
          rg={dados?.rg}
          cnh={dados?.cnh}
          nomeMae={dados?.nomeMae}
          nomePai={dados?.nomePai}
          tituloEleitor={dados?.tituloEleitor}
          sexo={dados?.sexo}
        />
      </ContainerDashboard>
    </>
  )
}
