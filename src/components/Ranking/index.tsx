import React from 'react'
import {Container, Progress, NameText, UserPicture} from './styles'

interface IRranking{
  nome:string;
  image:string;
  percentual:number;
}

export default function Ranking({nome, image, percentual}: IRranking) {
  return (
    <Container>
      <UserPicture src={image}/>
      <div>
        <NameText>{nome}</NameText>
        <Progress percentual={percentual} />
      </div>
    </Container>
  )
}
