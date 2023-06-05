import React from 'react'
import { Link } from 'react-router-dom'

import  Button  from '../../components/Button';
import Header from '../../components/Header/header';

import { Container, TextContent, Title, TitleHighlight} from './styles'

export default function home() {
  return (
    <>
      <Header/>
      <Container>
        <div>
            <Title>
             <TitleHighlight >
              Implemente <br /> 
             </TitleHighlight>
             O seu futuro global agora!
            </Title>
            <TextContent>
              Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
            </TextContent>
            <Button title="Começar agora" variant="secondary" onclick={ () => {}  }></Button>
        </div>
        <div>
          
        </div>
      </Container>
      
      <Link to="/login">Fazer login</Link>
    </>
  )
}