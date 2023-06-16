import styled from "styled-components";


export const ContainerCarrossel = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-pack: start;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    padding: 20px;
    gap: 4px;
    background: rgb(22, 18, 33);
    border-radius: 8px;
    transition: all 150ms linear 0s;
    min-width: 368px;
    max-width: 368px;
`

export const TituloCarrossel = styled.h3`
  font-weight: 400;
  font-size: 42px;
  color: rgb(250, 250, 250);
  margin-top: 0px;
  margin-bottom: 1rem;
  max-width: 250px;
  line-height: 1.2;
`

export const SpanCarrossel = styled.span`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: start;
  justify-content: flex-start;
  align-items: flex-start;
  color: rgb(158, 158, 158);
  font-size: 1rem;
  width: 100%;
  margin: 0.25rem 0px;
`

export const ContainerAtividade = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  margin: 0.5rem 0px;
`

export const Atividade = styled.span`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  margin: 0.5rem 0px;
`



export const LinkBotao = styled.button`
  width: 100%;
  color: rgb(255, 255, 255);
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  border-radius: 8px;
  padding: 0.6rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  text-transform: capitalize;
  border: 1px solid rgb(127, 40, 181);
  background: transparent;
  color: rgb(255, 255, 255);
  text-decoration: none;
  text-align: center;
  cursor: pointer;

  &:hover{
    background: rgb(150, 40, 181);
    border: 1px solid rgb(150, 40, 181);
  }  
`

