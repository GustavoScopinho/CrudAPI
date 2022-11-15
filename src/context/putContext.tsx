import React, { createContext, useState } from 'react'
import { api } from '../utilidades/api'
import { INewUserContext, IChildren } from '../utilidades/interface'

export const putContext = createContext({} as any)

export const PutContextProvider = ({ children }: IChildren) => {
  // const [putDados, setPutDados] = useState<any>()

  const editUser = async (user: INewUserContext) => {
    try {
      console.log(user)
      await api

        .put(`/dados-pessoais/${user.cpf}`, user)
        .then(response => console.log(response))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <putContext.Provider value={{ editUser }}>{children}</putContext.Provider>
  )
}
