import React from 'react'
import { DivPink, TitleHighlight, Wrapper } from './styles'

export default function PinkTag({title}) {
  return (
    <Wrapper>
      <TitleHighlight>{title}</TitleHighlight>
      <DivPink />
    </Wrapper>
    
  )
}
