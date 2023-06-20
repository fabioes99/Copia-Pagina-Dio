import React from 'react'
import { ContainerCarrossel, TituloCarrossel, Border, Close, WrapperImg, Img } from './styles'
import { X } from 'phosphor-react'

export default function Item({src, title}) {
  return (
    <Border>
    <ContainerCarrossel>
      <div>
        <Close><X size={27} color="white" /></Close>
        <WrapperImg>
          <Img src={src} />
        </WrapperImg>
      </div>
      <TituloCarrossel>
        <h3>{title}</h3>
      </TituloCarrossel>
    </ContainerCarrossel>
  </Border>
  )
}
