import React, { createContext } from 'react'
import { api } from '../utilidades/api'
import { INewUserContext, IChildren } from '../utilidades/interface'
import { useNavigate } from 'react-router-dom'

export const usuarioContext = createContext({} as any)

export const UserProvider = ({ children }: IChildren) => {
  const navigate = useNavigate()

  const createNewUser = async (user: INewUserContext) => {
    try {
      console.log(user)
      await api.post('/dados-pessoais', user)
      alert('Usuario criado')
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <usuarioContext.Provider value={{ createNewUser }}>
      {children}
    </usuarioContext.Provider>
  )
}
