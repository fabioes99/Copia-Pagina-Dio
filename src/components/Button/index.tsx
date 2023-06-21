import React from 'react'
import { ButtonContainer } from './styles'

interface IButton{
  title: string;
  onClick: () => void;
  isButtonEnabled?: boolean;
}

export default function Button({title, onClick, isButtonEnabled }:IButton) {
  return (
    <ButtonContainer onClick={onClick} type="submit" disabled={!isButtonEnabled}>
      {title}
    </ButtonContainer>
  )
}