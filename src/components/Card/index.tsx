import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'

import { 
  CardContainer, 
  Content,
  HasInfo, 
  ImageBackground,
  PostInfo, 
  UserInfo, 
  UserPicture
  } from './styles'

export default function Card() {
  return (
    <CardContainer>
      <ImageBackground />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/59034232?v=4" />
          <div>
            <h4>Fabio Simoes</h4>
            <p>Ha 9 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de React</h4>
          <p>Projeto feito para o curso de React no bootcamp...<strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#Html #Css #JavaScript</h4>
          <p>
            <FiThumbsUp /> 16
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}
