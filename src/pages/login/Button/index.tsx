import React from 'react'
import { ButtonContainer } from './styles'

interface IButton{
  title: string;
}

export default function Button({title }:IButton) {
  return (
    <ButtonContainer  type="submit" >
      {title}
    </ButtonContainer>
  )
}