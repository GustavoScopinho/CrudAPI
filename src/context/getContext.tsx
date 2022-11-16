import React, { createContext, useState } from 'react'
import { useEffect } from 'react'
import { api } from '../utilidades/api'
import { INewUserContext, IChildren } from '../utilidades/interface'

export const getContext = createContext({} as any)

export const GetUserProvider = ({ children }: IChildren) => {
  const [dadosAPI, setDadosAPI] = useState<INewUserContext[]>([])
  useEffect(() => {
    const buscarUsuarios = async () => {
      try {
        await api
          .get('/dados-pessoais')
          .then(response => setDadosAPI(response.data))
      } catch (error) {
        console.log(error)
      }
    }
    buscarUsuarios()
  }, [dadosAPI])

  return (
    <getContext.Provider value={{ dadosAPI }}>{children}</getContext.Provider>
  )
}
