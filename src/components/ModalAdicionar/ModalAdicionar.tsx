import { useForm } from 'react-hook-form'
import React, { useContext, useState } from 'react'
import Modal from 'react-modal'
import { ContainerModal, ModalStyle } from './Modal.styled'
import { IoCloseCircleSharp } from 'react-icons/io5'
import { INewUser } from '../../utilidades/interface'
import { usuarioContext } from '../../context/UsuarioContext'
import { putContext } from '../../context/putContext'

Modal.setAppElement('#root')

interface ModalProps {
  isOpen: boolean
  onRequestClose: () => void
  type?: number // 1- editar
  nome?: string
  cpf?: string
  rg?: string
  cnh?: string
  nomeMae?: string
  nomePai?: string
  tituloEleitor?: string
  sexo?: string
}

export const ModalAdicionar = (props: ModalProps) => {
  const { register, handleSubmit } = useForm<INewUser>()
  const { createNewUser } = useContext(usuarioContext)

  // const [ editNewUser, setEditNewUser ] = useForm<INewUser>()
  const { editUser } = useContext(putContext)

  const addNovoUsuario = (data: INewUser) => {
    createNewUser(data)
    props.onRequestClose()
  }

  const editarUsuario = (data: INewUser) => {
    console.log(data)
    editUser(data)
  }

  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.onRequestClose}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
        style={ModalStyle}
        ariaHideApp
      >
        <ContainerModal>
          <div className="ContainerBotao">
            <IoCloseCircleSharp
              className="buttonClose"
              onClick={props.onRequestClose}
              size={30}
            />
          </div>

          <h2>{props.type ? 'Editar usuário' : 'Adicionar novo usuário'}</h2>
          <form
            onSubmit={
              props.type
                ? handleSubmit(editarUsuario)
                : handleSubmit(addNovoUsuario)
            }
          >
            <label htmlFor="nome">Nome completo</label>
            {props.type ? (
              <input
                type="text"
                placeholder={props.nome}
                required
                id="nome"
                {...register('nome')}
              />
            ) : (
              <input type="text" required id="nome" {...register('nome')} />
            )}

            <label htmlFor="cpf">CPF</label>
            {props.type ? (
              <input
                type="text"
                value={props.cpf}
                placeholder={props.cpf}
                required
                id="cpf"
                {...register('cpf')}
              />
            ) : (
              <input type="text" required id="cpf" {...register('cpf')} />
            )}

            <label htmlFor="rg">RG</label>

            {props.type ? (
              <input
                type="text"
                placeholder={props.rg}
                required
                id="rg"
                {...register('rg')}
              />
            ) : (
              <input type="text" required id="rg" {...register('rg')} />
            )}

            <label htmlFor="cnh">CNH</label>
            {props.type ? (
              <input
                type="text"
                placeholder={props.cnh}
                required
                id="cnh"
                {...register('cnh')}
              />
            ) : (
              <input type="text" required id="cnh" {...register('cnh')} />
            )}

            <label htmlFor="nomeMae">Nome da mãe</label>
            {props.type ? (
              <input
                type="text"
                placeholder={props.nomeMae}
                required
                id="nomeMae"
                {...register('nomeMae')}
              />
            ) : (
              <input
                type="text"
                required
                id="nomeMae"
                {...register('nomeMae')}
              />
            )}

            <label htmlFor="nomePai">Nome do pai</label>
            {props.type ? (
              <input
                type="text"
                placeholder={props.nomePai}
                required
                id="nomePai"
                {...register('nomePai')}
              />
            ) : (
              <input
                type="text"
                required
                id="nomePai"
                {...register('nomePai')}
              />
            )}

            <label htmlFor="tituloEleitor">Título de eleitor</label>
            {props.type ? (
              <input
                type="text"
                placeholder={props.tituloEleitor}
                required
                id="tituloEleitor"
                {...register('tituloEleitor')}
              />
            ) : (
              <input
                type="text"
                required
                id="tituloEleitor"
                {...register('tituloEleitor')}
              />
            )}

            <label htmlFor="sexo">Sexo</label>
            {props.type ? (
              <select id="sexo" value={props.sexo} {...register('sexo')}>
                <option value="F">Feminino</option>
                <option value="M">Masculino</option>
              </select>
            ) : (
              <select id="sexo" {...register('sexo')}>
                <option value="F">Feminino</option>
                <option value="M">Masculino</option>
              </select>
            )}

            <input
              className="button-add"
              type="submit"
              value={props.type ? 'Editar usuário' : 'Adicionar novo usuário'}
            />
          </form>
        </ContainerModal>
      </Modal>
    </>
  )
}
