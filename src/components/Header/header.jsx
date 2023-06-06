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
              <MenuRight href="#">Home</MenuRight>
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
