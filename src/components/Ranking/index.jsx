import React from 'react'

import {Container, Progress, NameText, UserPicture} from './styles'

export default function Ranking({nome, image, percentual}) {
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
