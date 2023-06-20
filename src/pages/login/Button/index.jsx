import React from 'react'
import { ButtonContainer } from './styles.js'

export default function Button({title, onClick, type }) {
  return (
    <ButtonContainer onClick={onClick} type={type} >
      {title}
    </ButtonContainer>
  )
}