import React from 'react'
import HeaderLogin from '../../components/HeaderLogin';
import ProgressDemo from '../../components/Progress';
import SwitchDemo from '../../components/Switch';
import { CaretRight } from 'phosphor-react';
import  Card  from '../../components/Card';
import Ranking from '../../components/Ranking';

import {ProfileSpotlight, Info, WrapperUser, PerfilLink, Nome, Nivel, NomeCompleto, Xperience, WrapperSwitch, LinkPerfil, Column, LeftHalf, TitleHighlight, Container, TextContent, Title, ButtonWrapper, UserPicture} from './styles'

function Home() {

  return (
    <> 
      <HeaderLogin/>
      <Container>
      <Column flex={2}>
        <PerfilLink href='/'> 
        <WrapperUser>
          <UserPicture src="https://avatars.githubusercontent.com/u/59034232?v=4" />
        </WrapperUser> 
          <Info>
            <Nome>
              <NomeCompleto>Fabio Simoes</NomeCompleto>
              <Nivel>Nivel 6</Nivel>
            </Nome>
            <Xperience>
              <span>Experiencia 2460/2554</span>
              <ProgressDemo/>
            </Xperience>
          </Info>
        </PerfilLink>
        <ProfileSpotlight>
          <WrapperSwitch>
            <SwitchDemo/>
          </WrapperSwitch>
          <LinkPerfil href='/'>Visualizar meu Perfil <CaretRight size={26} color="white" /></LinkPerfil>
        </ProfileSpotlight>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Column>
        <div></div>
      
        <Column flex={4}>
          <Title>FEED</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight>RANKING DA SEMANA</TitleHighlight>
          <Ranking percentual={34} nome="Fabio SImoes" image="https://avatars.githubusercontent.com/u/59034232?v=4" />
          <Ranking percentual={54} nome="Fabio SImoes" image="https://avatars.githubusercontent.com/u/59034232?v=4" />
          <Ranking percentual={84} nome="Fabio SImoes" image="https://avatars.githubusercontent.com/u/59034232?v=4" />
          <Ranking percentual={14} nome="Fabio SImoes" image="https://avatars.githubusercontent.com/u/59034232?v=4" />
          <Ranking percentual={100} nome="Fabio SImoes" image="https://avatars.githubusercontent.com/u/59034232?v=4" />
        </Column>
      
      </Container>

    </>
  )
}


export default Home;