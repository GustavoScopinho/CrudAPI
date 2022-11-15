import { useForm } from 'react-hook-form'
import React, { useContext, useState } from 'react'
import Modal from 'react-modal'
import { ContainerModal, ModalStyle } from './Modal.styled'
import { IoCloseCircleSharp } from 'react-icons/io5'
import { INewUser } from '../../utilidades/interface'
import { usuarioContext } from '../../context/UsuarioContext'

Modal.setAppElement('#root')

interface ModalProps {
  isOpen: boolean
  onRequestClose: () => void
  type?: number // 1- editar
  cpf?: string
}

export const ModalAdicionar = (props: ModalProps) => {
  const { register, handleSubmit } = useForm<INewUser>()
  const { createNewUser } = useContext(usuarioContext)

  const addNovoUsuario = (data: INewUser) => {
    createNewUser(data)
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
          <form onSubmit={handleSubmit(addNovoUsuario)}>
            <label htmlFor="nome">Nome completo</label>
            <input type="text" required id="nome" {...register('nome')} />

            <label htmlFor="cpf">CPF</label>
            {props.type ? (
              <input type="text" disabled placeholder={props.cpf} />
            ) : (
              <input type="text" required id="cpf" {...register('cpf')} />
            )}

            <label htmlFor="rg">RG</label>
            <input type="text" required id="rg" {...register('rg')} />

            <label htmlFor="cnh">CNH</label>
            <input type="text" required id="cnh" {...register('cnh')} />

            <label htmlFor="nomeMae">Nome da mãe</label>
            <input type="text" required id="nomeMae" {...register('nomeMae')} />

            <label htmlFor="nomePai">Nome do pai</label>
            <input type="text" required id="nomePai" {...register('nomePai')} />

            <label htmlFor="tituloEleitor">Título de eleitor</label>
            <input
              type="text"
              required
              id="tituloEleitor"
              {...register('tituloEleitor')}
            />

            <label htmlFor="sexo">Sexo</label>
            <select id="sexo" {...register('sexo')}>
              <option value="F">Feminino</option>
              <option value="M">Masculino</option>
            </select>

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
