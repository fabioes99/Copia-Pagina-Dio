import React from 'react'
import { Sublinhar } from './styles'

interface ILink{
  color: string;
  link?: string;
  nome: string;
  onClick?: () => void;
}

export default function Link({ color, link, nome, onClick }: ILink) {
  return (
    <Sublinhar href={link} style={{ color: color }} onClick={onClick} >{nome}</Sublinhar>
  )
}
