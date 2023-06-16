import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/header';
import Carrousel from '../../components/Carrousel';

import {LinkBotao, PurpleLetter, ParagrafoCarrossel, WrapperCarrossel, TituloCarrosel, RightHalf, LeftHalf, Image, Container, ImageContainer,ImageOverlay, TextContent, Title, ButtonWrapper} from './styles'

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
                <LinkBotao >Comecar agora</LinkBotao>
              </ButtonWrapper>
        </LeftHalf>
        <RightHalf/>
      </Container>
      </ImageContainer>
      <WrapperCarrossel>
        <TituloCarrosel>
          Explore nossas <PurpleLetter>carreiras</PurpleLetter>
        </TituloCarrosel>
        <ParagrafoCarrossel>
          Desbloqueie o seu proximo nivel de conhecimento e seja contratado pelas maiores empresas de tecnologia do pais
        </ParagrafoCarrossel>
      </WrapperCarrossel>

      <Carrousel>

      </Carrousel>
    </>
  )
}


export default Home;