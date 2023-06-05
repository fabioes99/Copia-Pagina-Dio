import React from 'react'
import { ButtonContainer } from './styles.js'

export default function Button({title, variant="primary", onclick}) {
  return (
    <ButtonContainer variant={variant} onclicl={onclick}>
      {title}
    </ButtonContainer>
  )
}