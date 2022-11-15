import React, { createContext, useState } from 'react'
import { api } from '../utilidades/api'
import { INewUserContext, IChildren } from '../utilidades/interface'

export const delContext = createContext({} as any)

export const DelContextProvider = ({ children }: IChildren) => {
  const deletarUsuario = async (cpf: string) => {
    try {
      await api.delete(`/dados-pessoais/${cpf}`)
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
