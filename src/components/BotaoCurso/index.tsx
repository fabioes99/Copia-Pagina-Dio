import { Linguagem, Teste, Titulo, Imagem} from './styles'

interface Button {
  title: string;
  linguagem: string;
  src: string;
}

export default function BotaoCurso({title, linguagem, src}:Button) {

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
