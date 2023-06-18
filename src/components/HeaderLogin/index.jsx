import React from 'react'
import { faCircleQuestion, faBell, faHeart, faLoader } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Spinner } from "phosphor-react";

import {
  LinkBotao,
  UserPicture,
  Header,
  LinkNormal,
  Lista, 
  ListaItem,
  Nav,
  Botoes,
  LoadingLeft,
  LoadingRight,
  DivCoracao,
  NCoracao,
  LinkBotaoAmarelo,
  LinkAmarelo,
  Image,
  Sino
} from './styles.js'

function HeaderLogin({autenticado}) {

  return (
    <Header>  
        <Image src="https://hermes.digitalinnovation.one/assets/diome/logo-full.svg" alt="logo dio" />
      <Nav>
        <Lista>
          <ListaItem>
            <LinkNormal>Cursos</LinkNormal>
          </ListaItem>
          <ListaItem>
            <LinkAmarelo>Carreira Global<LoadingLeft><Spinner size={18} color="yellow" /></LoadingLeft></LinkAmarelo>
          </ListaItem>
          <ListaItem>
            <LinkAmarelo>Curso de Ingles<LoadingRight><Spinner size={18} color="yellow" /></LoadingRight></LinkAmarelo>
          </ListaItem>
          <ListaItem>
            <LinkNormal>Vagas</LinkNormal>
          </ListaItem>
          <ListaItem>
            <LinkNormal>Artigos</LinkNormal>
          </ListaItem>
          <ListaItem>
            <LinkNormal>Rooms</LinkNormal>
          </ListaItem>
          <ListaItem>
            <LinkBotaoAmarelo>Seja Global</LinkBotaoAmarelo>
          </ListaItem>
        </Lista>            
      </Nav>
      <Botoes>
        <div>
          <FontAwesomeIcon icon={faCircleQuestion} size='xl' style={{"--fa-secondary-color": "#ffffff",}} />
        </div>
        <Sino>
          <FontAwesomeIcon icon={faBell} size='xl' style={{color: "#ededed",}} />
        </Sino>
        <DivCoracao><FontAwesomeIcon icon={faHeart} size='xl' style={{color: "#ce2222",}} /><NCoracao>5</NCoracao></DivCoracao>
         <UserPicture src="https://avatars.githubusercontent.com/u/59034232?v=4" />
      </Botoes>
           
    </Header>
  )
}

export default HeaderLogin;