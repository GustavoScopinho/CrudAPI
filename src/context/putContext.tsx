import { createContext, useState } from 'react'
import { api } from '../utilidades/api'
import { INewUserContext, IChildren } from '../utilidades/interface'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import nProgress from 'nprogress'

export const putContext = createContext({} as any)

export const PutContextProvider = ({ children }: IChildren) => {
  const navigate = useNavigate()

  const editUser = async (user: INewUserContext) => {
    try {
      nProgress.start()
      await api
        .put(`/dados-pessoais/${user.cpf}`, user)
        .then(response => console.log(response))
      toast.success('Usuário editado com sucesso!', {
        position: 'top-center',
        theme: 'dark'
      })
      navigate('/')
    } catch (error) {
      console.log(error)
    } finally {
      nProgress.done()
    }
  }

  return (
    <putContext.Provider value={{ editUser }}>{children}</putContext.Provider>
  )
}
