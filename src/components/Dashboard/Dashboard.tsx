import { useState, useContext, useEffect } from 'react'
import {
  ContainerDashboard,
  ContainerTitulo,
  ContainerUsuarios
} from './Dashboard.styled'
import IconLapis from '../../assets/icon-lapis.png'
import IconLixeira from '../../assets/icon-lixeira.png'
import { ModalAdicionar } from '../ModalAdicionar/ModalAdicionar'
import { getContext } from '../../context/getContext'
import { GoThreeBars } from 'react-icons/go'
import { BiSearchAlt } from 'react-icons/bi'
import { delContext } from '../../context/delContext'
import { api } from '../../utilidades/api'

export const Dashboard = () => {
  const { dadosAPI } = useContext(getContext)

  const [modal, setModal] = useState<boolean>(false)
  const [modalEditar, setModalEditar] = useState<boolean>(false)

  const [dados, setDados] = useState<any>()

  const handleEdit = (e: string) => {
    setModalEditar(true)
    setDados(e)
  }

  useEffect(() => {
    console.log(dados)
  }, [dados])

  const handleAdd = () => {
    setModal(false)
  }

  const { deletarUsuario } = useContext(delContext)

  const [valueInput, setValueInput] = useState<string>()
  const [inputSearchResult, setInputSearchResult] = useState<any>()

  useEffect(() => {
    console.log(inputSearchResult)
  }, [inputSearchResult])

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      await api
        .get(`/dados-pessoais/${valueInput}`)
        .then(response => setInputSearchResult(response.data))
    } catch (error) {
      console.log(error)
    }
  }

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
              <form onSubmit={handleSubmit} className="ContainerSearch">
                <input
                  type="text"
                  placeholder="Filtre o usuário pelo CPF"
                  name=""
                  id=""
                  onChange={e => setValueInput(e.target.value)}
                />{' '}
                <button className="botaoSearch" type="submit">
                  <BiSearchAlt className="IconSearch" size={31.5} />
                </button>
              </form>
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

              {!inputSearchResult ? (
                dadosAPI?.map((user: any) => {
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
                })
              ) : (
                <tr>
                  <td>{inputSearchResult?.nome}</td>
                  <td>{inputSearchResult?.cpf}</td>
                  <td>{inputSearchResult?.rg}</td>
                  <td>{inputSearchResult?.cnh}</td>
                  <td>{inputSearchResult?.nomeMae}</td>
                  <td>{inputSearchResult?.nomePai}</td>
                  <td>{inputSearchResult?.tituloEleitor}</td>
                  <td>{inputSearchResult?.sexo}</td>
                  <td className="container-botao">
                    <button>
                      {' '}
                      <i>
                        <img
                          src={IconLapis}
                          onClick={() => handleEdit(inputSearchResult)}
                          alt=""
                        />
                      </i>
                    </button>{' '}
                    <button>
                      {' '}
                      <i>
                        <img
                          src={IconLixeira}
                          onClick={() => deletarUsuario(inputSearchResult.cpf)}
                          alt=""
                        />
                      </i>{' '}
                    </button>
                  </td>
                </tr>
              )}
            </table>
          </div>
        </ContainerUsuarios>
        <ModalAdicionar isOpen={modal} onRequestClose={() => handleAdd()} />
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
