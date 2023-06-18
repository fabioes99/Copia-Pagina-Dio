import React from 'react'
import HeaderLogin from '../../components/HeaderLogin';
import ProgressDemo from '../../components/Progress';
import SwitchDemo from '../../components/Switch';
import { CaretRight } from 'phosphor-react';

import {ProfileSpotlight, PerfilLink, Nome, Nivel, NomeCompleto, Xperience, WrapperSwitch, LinkPerfil, RightHalf, LeftHalf, Image, Container, TextContent, Title, ButtonWrapper, UserPicture} from './styles'

function Home() {


  return (
    <> 
      <HeaderLogin/>
      <Container>
        <LeftHalf>
          <ProfileSpotlight>
            <PerfilLink href='/'> 
              <UserPicture src="https://avatars.githubusercontent.com/u/59034232?v=4" />
              <div>
                <Nome>
                  <NomeCompleto>Fabio Simoes</NomeCompleto>
                  <Nivel>Nivel 6</Nivel>
                </Nome>
                <Xperience>
                  <span>Experiencia 2460/2554</span>
                  <ProgressDemo/>
                </Xperience>
              </div>
            </PerfilLink>
            <WrapperSwitch>
              <SwitchDemo/>
            </WrapperSwitch>
            <LinkPerfil href='/'>Visualizar meu Perfil <CaretRight size={26} color="white" /></LinkPerfil>
          </ProfileSpotlight>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </LeftHalf>
        <div></div>
      </Container>

    </>
  )
}


export default Home;