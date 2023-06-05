import React from 'react'
import Button from '../Button/index.jsx'

import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  Wrapper
} from './styles.js'

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Row>
         
          <BuscarInputContainer>
            <Input placeholder='Buscar...' />
          </BuscarInputContainer>
          <Menu>Live Code</Menu>
          <Menu>Global</Menu>
        </Row>
        <Row>
          <MenuRight href="#">Home</MenuRight>
          <Button title="Entrar"/>
          <Button title="Cadastrar"/>
        </Row>
      </Container>
    </Wrapper>
  )
}
