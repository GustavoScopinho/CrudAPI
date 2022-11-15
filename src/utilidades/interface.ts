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

export interface ModalProps {
  isOpen: boolean
  onRequestClose: () => void
  type?: number // 1- editar
  nome: string
  cpf: string
  rg: string
  cnh: string
  nomeMae: string
  nomePai: string
  tituloEleitor: string
  sexo: string
}
