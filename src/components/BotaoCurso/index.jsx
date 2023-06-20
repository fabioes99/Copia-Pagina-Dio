import React from 'react'
import { Linguagem, Teste, Titulo, Imagem} from './styles'

export default function BotaoCurso({title, linguagem, src}) {
  return (
    <Teste>
      <Imagem src={src} />
      <div>
        <Titulo>{title}</Titulo>
        <Linguagem>{linguagem}</Linguagem>
      </div>
    </Teste>
    
  )
}
