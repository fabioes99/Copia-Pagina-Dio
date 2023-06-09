import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button  from '../../components/Button';
import Header from '../../components/Header/header';

import { RightHalf, LeftHalf, Image, Container, ImageContainer,ImageOverlay, TextContent, Title, ButtonWrapper} from './styles'

function Home() {

  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/login');
  }


  return (
    <> 
      <Header/>  
      <ImageContainer>
        <Image />
        <ImageOverlay />
        <Container>
        <LeftHalf>
            <Title>
            Codifique o seu <br />
            futuro global agora!
            </Title>
            <TextContent>
              Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
            </TextContent>
              <ButtonWrapper>
                <Button title="Comecar agora" onclick={ handleClickSignIn  }></Button>
              </ButtonWrapper>
        </LeftHalf>

        <RightHalf>

        </RightHalf>
        
      </Container>
      </ImageContainer>
    </>
  )
}


export default Home;