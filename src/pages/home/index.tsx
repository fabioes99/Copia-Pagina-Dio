import React, { useContext } from 'react';
import HeaderLogin from '../../components/HeaderLogin';
import ProgressDemo from '../../components/Progress';
import SwitchDemo from '../../components/Switch';
import { CaretRight } from 'phosphor-react';
import Card  from '../../components/Card';
import Ranking from '../../components/Ranking';
import PinkTag from '../../components/PinkTag';
// @ts-ignore
import MyCarousel from './Carrousel/index';
import ProgressBadge from './Progress';

import {ProfileSpotlight, LinkCurso, Img, BotaoBranco, ContainerProgress, WrapperBotao, Paragrafo, Section, Badge, TituloCurso, Info, WrapperUser, PerfilLink, Nome, Nivel, NomeCompleto, Xperience, WrapperSwitch, LinkPerfil, Column, MeusCursos, Container, Title, UserPicture} from './styles'
import BotaoCurso from '../../components/BotaoCurso';
import { AuthContext } from '../../context/auth';
import '@radix-ui/themes/styles.css';


function Home() {

  const { user } = useContext( AuthContext );

  

  return (
    <div> 
      <HeaderLogin/>
      <Container>
      <Column flex={1.6}>
        <PerfilLink href='/'> 
        <WrapperUser>
          <UserPicture src="https://avatars.githubusercontent.com/u/59034232?v=4" />
        </WrapperUser> 
          <Info>
            <Nome>
              <NomeCompleto>{user.username}</NomeCompleto>
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

          <div>
            <span>Força do perfil na DIO: <strong>SILVER</strong></span>
            <ContainerProgress>
             
              <ProgressBadge />
            </ContainerProgress>
            <Section>
              <Badge src="https://hermes.dio.me/assets/profile-force/silver.png" />
              <div>
                <Paragrafo>Seu perfil é Silver! Você já deu um passo importante, mas ainda há muitas conquistas pela frente.</Paragrafo>
                <Paragrafo><div className=''>Ver Mais</div></Paragrafo>
              </div>
            </Section>
          </div>

          <MeusCursos>
           <PinkTag title="MEUS PROGRAMAS" />
           <LinkCurso >
            <Img src="https://hermes.dio.me/tracks/68c81887-a1c2-440d-a7ea-7777bc10cd41.png" width="30" />
            <TituloCurso>Formação React Developer</TituloCurso>
           </LinkCurso>
          </MeusCursos>

          <MeusCursos>
           <PinkTag title="MEUS CURSOS" />
           <LinkCurso >
            <Img src="https://hermes.dio.me/courses/badge/e830c6d2-0566-4c36-a5d9-d261fef2c57d.png" width="30" height="30" />
            <TituloCurso>Construindo paginas para internet com Bootstrap</TituloCurso>
           </LinkCurso>
           <LinkCurso >
            <Img src="https://hermes.dio.me/courses/badge/3c23b6a7-5963-4dc9-95e7-bacc3f8b0b2d.png" width="30" height="30" />
            <TituloCurso>Introducao ao PHP</TituloCurso>
           </LinkCurso>
           <LinkCurso >
            <Img src="https://hermes.dio.me/courses/badge/9923a300-e5c0-420d-b38c-26a24d307c33.png" width="30" height="30"/>
            <TituloCurso>Formularios com condicionais e sessoes com PHP</TituloCurso>
           </LinkCurso>
          </MeusCursos>

          <WrapperBotao>
            <BotaoBranco>PRECISA DE AJUDA?</BotaoBranco>
            <BotaoBranco>INDIQUE UM AMIGO</BotaoBranco>
          </WrapperBotao>

          </ProfileSpotlight>
          
        </Column>
        <Column flex={3}>
          <PinkTag title="FORMAÇÕES RECOMENDADAS" />
          <span>Selecionamos para você as formações com os melhores salarios do mercado</span>
          <MyCarousel />
          <Title>FEED</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1.3}>
          <PinkTag title="TOP PROJETOS PARA VOCÊ" />
          <BotaoCurso src="https://hermes.dio.me/lab_projects/badges/f89509e4-3dc8-4ca8-acfa-27ed2b42e9a6.png" title="MySql - Modelando um Banco de uma Loja de Jogos" linguagem="MySQL" />
          <BotaoCurso src="https://hermes.dio.me/lab_projects/badges/827f14cb-aef8-4f78-8a5a-7a78e7ec96ad.png" title="MySql - Como Modelar um Banco de Controle de Se..." linguagem="MySQL" />
          <BotaoCurso src="https://hermes.dio.me/lab_projects/badges/f89509e4-3dc8-4ca8-acfa-27ed2b42e9a6.png" title="Construindo uma aplicação  MVC com Laravel 7 par..." linguagem="Laravel" />
          <PinkTag title="RANKING DA SEMANA" />
          <Ranking percentual={34} nome="Fabio Simoes" image="https://avatars.githubusercontent.com/u/59034232?v=4" />
          <Ranking percentual={54} nome="Fabio Simoes" image="https://avatars.githubusercontent.com/u/59034232?v=4" />
          <Ranking percentual={84} nome="Fabio Simoes" image="https://avatars.githubusercontent.com/u/59034232?v=4" />
          <Ranking percentual={14} nome="Fabio Simoes" image="https://avatars.githubusercontent.com/u/59034232?v=4" />
          <Ranking percentual={99} nome="Fabio Simoes" image="https://avatars.githubusercontent.com/u/59034232?v=4" />
        </Column>
      
      </Container>

    </div>
  )

}


export default Home;