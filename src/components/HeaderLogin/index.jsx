import React from 'react'
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Spinner } from "phosphor-react";
import DropdownHome from '../../components/DropDownHome';
import DropdownPerfil from '../../components/DropDownHome/perfil';
import DropdownHeart from '../DropDownHome/heart';

import {
  Header,
  LinkNormal,
  Lista, 
  ListaItem,
  Nav,
  Botoes,
  LoadingLeft,
  LoadingRight,
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
        <DropdownHome />
        <Sino>
          <FontAwesomeIcon icon={faBell} size='xl' style={{color: "#ededed",}} />
        </Sino>
        <DropdownHeart />
        <DropdownPerfil />
      </Botoes>
    </Header>
  )
}

export default HeaderLogin;