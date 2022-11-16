import React, { createContext } from 'react'
import { api } from '../utilidades/api'
import { INewUserContext, IChildren } from '../utilidades/interface'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import nProgress from 'nprogress'

export const usuarioContext = createContext({} as any)

export const UserProvider = ({ children }: IChildren) => {
  const navigate = useNavigate()

  const createNewUser = async (user: INewUserContext) => {
    try {
      nProgress.start()

      await api.post('/dados-pessoais', user)
      toast.success('Usuário criado com sucesso!', {
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
    <usuarioContext.Provider value={{ createNewUser }}>
      {children}
    </usuarioContext.Provider>
  )
}
