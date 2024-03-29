import React from 'react'
import { useNavigate } from 'react-router-dom';

import {
  Container,
  Image,
  LinkBotao,
  Row,
  Nav,
  LinkNormal,
  Lista, 
  ListaItem,
  LinkBotaoRoxo,
  Button,
  SVGContainer
} from './styles'

function Header() {

  let currentURL = window.location.href;

  var navOn = false;

  if (currentURL.includes("sign-up")){
    navOn = true;
  } 
  
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/');
  }

  const handleCriarConta = () => {
    navigate('/sign-up');
  }

  return (
    <Nav>  
      <Container>
        { navOn ? (
          <SVGContainer>
            <svg xmlns="http://www.w3.org/2000/svg" width="98" height="40" fill="none" viewBox="0 0 98 40"><path fill="#fff" d="M97.058 32.674a6.446 6.446 0 01-3.963 5.96 6.428 6.428 0 01-7.016-1.389 6.443 6.443 0 014.545-10.999c1.704 0 3.338.678 4.544 1.883a6.446 6.446 0 011.89 4.545zM77.737 35.135a16.805 16.805 0 004.415-21.243 16.778 16.778 0 00-8.662-7.637 16.757 16.757 0 00-11.54-.227 16.776 16.776 0 00-8.954 7.292 16.805 16.805 0 003.58 21.4 16.762 16.762 0 0021.16.415zM33.963 20.765V0A12.847 12.847 0 0023 6.138 16.751 16.751 0 003.948 11.66a16.796 16.796 0 00-.458 19.85 16.77 16.77 0 008.342 6.278 16.752 16.752 0 0018.921-5.959 16.797 16.797 0 003.25-9.927c0-.384-.02-.762-.04-1.138zM42.208 12.934a6.387 6.387 0 00-4.517 1.873 6.4 6.4 0 00-1.871 4.522v19.364c3.41 0 6.68-1.356 9.091-3.77a12.878 12.878 0 003.766-9.101v-6.405a6.487 6.487 0 00-1.894-4.582 6.473 6.473 0 00-4.575-1.901z"></path><path fill="#fff" d="M48.687 6.44a6.445 6.445 0 01-3.971 5.95 6.427 6.427 0 01-7.012-1.396A6.443 6.443 0 0142.254 0c1.706 0 3.342.68 4.548 1.887a6.447 6.447 0 011.885 4.553z"></path></svg>
          </SVGContainer>
        ) : (
          <Image src="https://hermes.digitalinnovation.one/assets/diome/logo-full.svg" alt="logo dio" />
        )}
        <Row>
          { navOn ? (
            <>
            <Lista>
              <ListaItem>
               <LinkNormal>Carreiras</LinkNormal>
              </ListaItem>
              <ListaItem>
               <LinkNormal>Cursos</LinkNormal>
              </ListaItem>
              <ListaItem>
               <LinkNormal>Comunidade</LinkNormal>
              </ListaItem>
              <ListaItem>
               <LinkNormal>Planos</LinkNormal>
              </ListaItem>
              <ListaItem>
               <LinkNormal>Para Empresas</LinkNormal>
              </ListaItem>
            </Lista>            
              <LinkBotao onClick={ handleClickSignIn  }>Entrar</LinkBotao>
              <LinkBotaoRoxo onClick={ handleCriarConta } >Criar Conta</LinkBotaoRoxo>
            </>  
          ) : (
            <Lista>
              <ListaItem>
               <LinkNormal>Home</LinkNormal>
              </ListaItem>
              <ListaItem>
               <LinkNormal>Catalogo</LinkNormal>
              </ListaItem>
              <ListaItem>
               <LinkNormal>Planos</LinkNormal>
              </ListaItem>
              <ListaItem>
               <LinkNormal>Para Empresas</LinkNormal>
              </ListaItem>
            </Lista>
          )}
          <Lista>
            <ListaItem>
              <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="none" viewBox="0 0 512 512"><path fill="#6DA544" d="M256 512c141.385 0 256-114.615 256-256S397.385 0 256 0 0 114.615 0 256s114.615 256 256 256z"></path><path fill="#FFDA44" d="M256 100.174L467.478 256 256 411.826 44.523 256 256 100.174z"></path><path fill="#F0F0F0" d="M256 345.043c49.177 0 89.043-39.866 89.043-89.043 0-49.177-39.866-89.043-89.043-89.043-49.177 0-89.043 39.866-89.043 89.043 0 49.177 39.866 89.043 89.043 89.043z"></path><path fill="#0052B4" d="M211.478 250.436c-15.484 0-30.427 2.355-44.493 6.725.623 48.64 40.227 87.884 89.015 87.884 30.168 0 56.812-15.017 72.919-37.968-27.557-34.497-69.958-56.641-117.441-56.641zM343.394 273.06a89.45 89.45 0 001.651-17.06c0-49.178-39.866-89.043-89.043-89.043-36.694 0-68.194 22.201-81.826 53.899a183.693 183.693 0 0137.305-3.812c51.717-.001 98.503 21.497 131.913 56.016z"></path></svg>
            </ListaItem>
            <ListaItem>
              <Button><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="none" viewBox="0 0 512 512"><g clipPath="url(#clip0)"><path fill="#F0F0F0" d="M256 511.999c141.385 0 256-114.615 256-256s-114.615-256-256-256-256 114.615-256 256 114.615 256 256 256z"></path><path fill="#D80027" d="M244.87 256H512c0-23.106-3.08-45.49-8.819-66.783H244.87V256zM244.87 122.434h229.556a257.354 257.354 0 00-59.07-66.783H244.87v66.783zM256 512c60.249 0 115.626-20.824 159.356-55.652H96.644C140.374 491.176 195.75 512 256 512zM37.574 389.564h436.852a254.474 254.474 0 0028.755-66.783H8.819a254.475 254.475 0 0028.755 66.783z"></path><path fill="#0052B4" d="M118.584 39.977h23.329l-21.7 15.765 8.289 25.509-21.699-15.765-21.699 15.765 7.16-22.037a257.407 257.407 0 00-49.652 55.337h7.475l-13.813 10.035a255.58 255.58 0 00-6.194 10.938l6.596 20.301-12.306-8.941a253.567 253.567 0 00-8.372 19.873l7.267 22.368h26.822l-21.7 15.765 8.289 25.509-21.699-15.765-12.998 9.444A258.468 258.468 0 000 255.999h256v-256c-50.572 0-97.715 14.67-137.416 39.978zm9.918 190.422l-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765 8.289 25.509zm-8.289-100.083l8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765zm100.115 100.083l-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765 8.289 25.509zm-8.289-100.083l8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765zm0-74.574l8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765z"></path></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0H512V512H0z" transform="translate(0 -.001)"></path></clipPath></defs></svg></Button>      
            </ListaItem>
            <ListaItem>
            <Button> <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="none" viewBox="0 0 512 512"><path fill="#FFDA44" d="M0 256c0 31.314 5.633 61.31 15.923 89.043L256 367.304l240.077-22.261C506.367 317.31 512 287.314 512 256c0-31.314-5.633-61.31-15.923-89.043L256 144.696 15.923 166.957C5.633 194.69 0 224.686 0 256z"></path><path fill="#D80027" d="M496.077 166.957C459.906 69.473 366.071 0 256 0S52.094 69.473 15.923 166.957h480.154zM15.923 345.043C52.093 442.527 145.929 512 256 512s203.906-69.473 240.077-166.957H15.923z"></path></svg></Button>
            </ListaItem>       
          </Lista> 
        </Row>
      </Container>
    </Nav>
  )
}

export default Header;