import styled from "styled-components"

export const ContainerCarrossel = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    background: rgb(45, 45, 55);
    transition: all 150ms linear 0s;
    width: 160px;
    min-height: 216px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
    border-radius: 8px;
`

export const Border = styled.div`
    display: inline-block;
    background: linear-gradient(rgb(34, 221, 122) 0%, rgb(24, 70, 45) 100%);
    padding: 3px;
    border-radius: 8px;
`


export const Close = styled.div`
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    margin-top: 10px;
`

export const WrapperImg = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
`

export const Img = styled.img`
    max-width: 80px;
    max-height: 80px;
    margin: 0px auto;
    display: block;
`

export const TituloCarrossel = styled.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 3px 2px;
  text-align: center;
`
