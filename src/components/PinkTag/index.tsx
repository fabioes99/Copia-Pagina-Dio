import React from 'react'
import { DivPink, TitleHighlight, Wrapper } from './styles'

interface IPinkTag{
  title: string;
}

export default function PinkTag({title}: IPinkTag) {
  return (
    <Wrapper>
      <TitleHighlight>{title}</TitleHighlight>
      <DivPink />
    </Wrapper>
    
  )
}
