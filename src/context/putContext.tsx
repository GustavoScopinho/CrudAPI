import { createContext, useState } from 'react'
import { api } from '../utilidades/api'
import { INewUserContext, IChildren } from '../utilidades/interface'
import { useNavigate } from 'react-router-dom'

export const putContext = createContext({} as any)

export const PutContextProvider = ({ children }: IChildren) => {
  const navigate = useNavigate()

  const editUser = async (user: INewUserContext) => {
    try {
      console.log(user)
      await api

        .put(`/dados-pessoais/${user.cpf}`, user)
        .then(response => console.log(response))
      alert('Usuario editado')
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <putContext.Provider value={{ editUser }}>{children}</putContext.Provider>
  )
}
