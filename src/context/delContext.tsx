import React, { createContext, useState } from 'react'
import { api } from '../utilidades/api'
import { IChildren } from '../utilidades/interface'
import { toast } from 'react-toastify'

export const delContext = createContext({} as any)

export const DelContextProvider = ({ children }: IChildren) => {
  const deletarUsuario = async (cpf: string) => {
    try {
      await api.delete(`/dados-pessoais/${cpf}`)
      toast.success('Usuário criado com sucesso!', {
        position: 'top-center',
        theme: 'dark'
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <delContext.Provider value={{ deletarUsuario }}>
      {children}
    </delContext.Provider>
  )
}
