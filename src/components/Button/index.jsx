import React from 'react'
import { ButtonContainer } from './styles.js'

export default function Button({title, onClick}) {
  return (
    <ButtonContainer onClick={onClick}>
      {title}
    </ButtonContainer>
  )
}