import React from 'react'
import  Card  from '../../components/Card';
import Header from '../../components/Header/header';
import Ranking from '../../components/Ranking';

import { Container, Column, Title, TitleHighlight} from './styles'

export default function feed() {
  return (
    <>
      <Header autenticado={true}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
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