import React from 'react';
import HeaderLogin from '../../components/HeaderLogin';
import ProgressDemo from '../../components/Progress';
import SwitchDemo from '../../components/Switch';
import { CaretRight } from 'phosphor-react';
import  Card  from '../../components/Card';
import Ranking from '../../components/Ranking';
import PinkTag from '../../components/PinkTag';
import Teste from './Carrousel/index'

import {ProfileSpotlight, Info, WrapperUser, PerfilLink, Nome, Nivel, NomeCompleto, Xperience, WrapperSwitch, LinkPerfil, Column, LeftHalf, TitleHighlight, Container, TextContent, Title, ButtonWrapper, UserPicture} from './styles'
import BotaoCurso from '../../components/BotaoCurso';


function Home() {

  return (
    <> 
      <HeaderLogin/>
      <Container>
      <Column flex={1.7}>
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
        <Column flex={3}>
          <PinkTag title="FORMACOES RECOMENDADAS" />
          <p>Selecionamos para voce as formacoes com os melhores salarios do mercado</p>
          <Teste />
          <Title>FEED</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1.3}>
          <PinkTag title="TOP PROJETOS PARA VOCE" />
          <BotaoCurso src="https://hermes.dio.me/lab_projects/badges/f89509e4-3dc8-4ca8-acfa-27ed2b42e9a6.png" title="MySql - Modelando um Banco de uma Loja de Jogos" linguagem="MySQL" />
          <BotaoCurso src="https://hermes.dio.me/lab_projects/badges/827f14cb-aef8-4f78-8a5a-7a78e7ec96ad.png" title="MySql - Como Modelar um Banco de Controle de Se..." linguagem="MySQL" />
          <BotaoCurso src="https://hermes.dio.me/lab_projects/badges/f89509e4-3dc8-4ca8-acfa-27ed2b42e9a6.png" title="Construindo uma Aplicacao MVC com Laravel 7 par..." linguagem="Laravel" />
          <PinkTag title="RANKING DA SEMANA" />
          <Ranking percentual={34} nome="Fabio Simoes" image="https://avatars.githubusercontent.com/u/59034232?v=4" />
          <Ranking percentual={54} nome="Fabio Simoes" image="https://avatars.githubusercontent.com/u/59034232?v=4" />
          <Ranking percentual={84} nome="Fabio Simoes" image="https://avatars.githubusercontent.com/u/59034232?v=4" />
          <Ranking percentual={14} nome="Fabio Simoes" image="https://avatars.githubusercontent.com/u/59034232?v=4" />
          <Ranking percentual={99} nome="Fabio Simoes" image="https://avatars.githubusercontent.com/u/59034232?v=4" />
        </Column>
      
      </Container>

    </>
  )
}


export default Home;