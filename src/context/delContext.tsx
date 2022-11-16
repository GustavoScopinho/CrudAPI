import React, { createContext, useState } from 'react'
import { api } from '../utilidades/api'
import { IChildren } from '../utilidades/interface'
import { toast } from 'react-toastify'
import nProgress from 'nprogress'

export const delContext = createContext({} as any)

export const DelContextProvider = ({ children }: IChildren) => {
  const deletarUsuario = async (cpf: string) => {
    try {
      nProgress.start()
      await api.delete(`/dados-pessoais/${cpf}`)
      toast.success('Usuário deletado com sucesso!', {
        position: 'top-center',
        theme: 'dark'
      })
    } catch (error) {
      console.log(error)
    } finally {
      nProgress.done()
    }
  }

  return (
    <delContext.Provider value={{ deletarUsuario }}>
      {children}
    </delContext.Provider>
  )
}
