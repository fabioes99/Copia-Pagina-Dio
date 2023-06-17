import React from 'react'
import { ButtonContainer } from './styles.js'

export default function Button({title, onClick, type,  isButtonEnabled }) {
  return (
    <ButtonContainer onClick={onClick} type={type}  disabled={!isButtonEnabled}>
      {title}
    </ButtonContainer>
  )
}