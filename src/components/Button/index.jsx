import React from 'react'
import { ButtonContainer } from './styles.js'

export default function Button({title, onclick}) {
  return (
    <ButtonContainer onclicl={onclick}>
      {title}
    </ButtonContainer>
  )
}