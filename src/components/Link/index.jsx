import React from 'react'
import { Sublinhar } from './styles'

export default function Link({ color, link, nome }) {
  return (
    <Sublinhar href={link} style={{ color: color }}  >{nome}</Sublinhar>
  )
}
