import React from 'react'
import Button from '../Button/index.jsx'

import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper
} from './styles.js'

export default function Header({autenticado}) {
  return (
    <Wrapper>
      <svg xmlns="http://www.w3.org/2000/svg" width="98" height="40" fill="none" viewBox="0 0 98 40"><path fill="#fff" d="M97.058 32.674a6.446 6.446 0 01-3.963 5.96 6.428 6.428 0 01-7.016-1.389 6.443 6.443 0 014.545-10.999c1.704 0 3.338.678 4.544 1.883a6.446 6.446 0 011.89 4.545zM77.737 35.135a16.805 16.805 0 004.415-21.243 16.778 16.778 0 00-8.662-7.637 16.757 16.757 0 00-11.54-.227 16.776 16.776 0 00-8.954 7.292 16.805 16.805 0 003.58 21.4 16.762 16.762 0 0021.16.415zM33.963 20.765V0A12.847 12.847 0 0023 6.138 16.751 16.751 0 003.948 11.66a16.796 16.796 0 00-.458 19.85 16.77 16.77 0 008.342 6.278 16.752 16.752 0 0018.921-5.959 16.797 16.797 0 003.25-9.927c0-.384-.02-.762-.04-1.138zM42.208 12.934a6.387 6.387 0 00-4.517 1.873 6.4 6.4 0 00-1.871 4.522v19.364c3.41 0 6.68-1.356 9.091-3.77a12.878 12.878 0 003.766-9.101v-6.405a6.487 6.487 0 00-1.894-4.582 6.473 6.473 0 00-4.575-1.901z"></path><path fill="#fff" d="M48.687 6.44a6.445 6.445 0 01-3.971 5.95 6.427 6.427 0 01-7.012-1.396A6.443 6.443 0 0142.254 0c1.706 0 3.342.68 4.548 1.887a6.447 6.447 0 011.885 4.553z"></path></svg>
      <Container>
        <Row>
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder='Buscar...' />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          { !autenticado ? (
            <>
              
              <Button title="Entrar"/>
              <Button title="Criar Conta"/>
            </>
          ) : (
            <UserPicture src="https://avatars.githubusercontent.com/u/59034232?v=4" />
          )}
        </Row>
      </Container>
    </Wrapper>
  )
}
