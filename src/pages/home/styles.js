import styled from "styled-components";
import Banner from '../../assets/banner-play.png'

export const Container = styled.main`

  max-width: 1200px;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: start;
  justify-content: flex-start;
  width: 100%;
  align-items: flex-start;
 

  position: relative;
  z-index: 4;
`

export const LeftHalf = styled.div`
  flex: 2;
  margin: 3rem 3rem 0;
  padding-left: 40px;
`

export const RightHalf = styled.div`
  flex: 1;
`

export const Title = styled.h2`

  font-style:normal;
  font-weight: bold;
  font-size: 56px;
  margin: 1.5rem 0;
  line-height: 1.15;
  position: relative;
  z-index: 4;
  color: #fff;

`

export const TextContent = styled.p`

  font-style:normal;
  font-weight: 400;
  font-size: 16px;
  margin: 0.6em 0px;
  line-height: 24px;

  position: relative;
  z-index: 4;
  color: #fff;
`

export const ButtonWrapper = styled.div`
  margin: 3rem 0;
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 465px;
  
  position: absolute;
  z-index: 2;
`

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: linear-gradient(99.06deg, rgb(0, 0, 0) 45.8%, rgba(0, 0, 0, 0) 90.54%);
`

export const Image = styled.div`
  width: 100%;
  height: 465px;
  position: absolute;
  background: url(${Banner});
  background-size: cover;
  background-position: center;
`;

export const WrapperCarrossel = styled.div`
  margin-top: 480px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(30, 25, 44);
  padding: 0px 1.5rem;
`

export const TituloCarrosel = styled.h1`
  font-size: 42px;
  text-align: center;
  margin: 0.6em 0px;
  font-weight: bold;
  color: rgb(255, 255, 255);
`

export const ParagrafoCarrossel = styled.p`
  margin: 1.5rem 0px 4rem;
  max-width: 640px;
  text-align: center;
  color: rgb(255, 255, 255);
  line-height: 150%;
`

export const PurpleLetter = styled.span`
  color: rgb(127, 40, 181);
`


export const LinkBotao = styled.a`
  border-radius: 8px;
  color: #fff;
  border: 1px solid rgb(127, 40, 181);
  padding: 0.6rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  text-transform: capitalize;
  background: rgb(127, 40, 181);
  position: relative;
  text-decoration: none;
  text-align: center;

  &:hover{
    background: rgb(150, 40, 181);
    cursor: pointer;
  }   
`