export interface INewUser {
  nome: string
  cpf: string
  rg: string
  cnh: string
  nomeMae: string
  nomePai: string
  tituloEleitor: string
  sexo: 'F' | 'M'
}

export interface INewUserContext {
  nome: string
  cpf: string
  rg: string
  cnh: string
  nomeMae: string
  nomePai: string
  tituloEleitor: string
  sexo: string
}

export interface IChildren {
  children?: React.ReactNode
}
