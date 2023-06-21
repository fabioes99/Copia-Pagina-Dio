import styled from "styled-components";

export const Image = styled.img`
  max-width: 85px;
  margin-left: 1rem;
`;

export const Header = styled.nav ` 
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  width: 100%;
  height: 70px;
  background-color: rgb(10, 10, 10);
`

export const LoadingLeft = styled.span`
  top: 0.5rem;
  left: 19rem;
  position: absolute;
`

export const LoadingRight = styled.span`
  top: 0.5rem;
  left: 27.5rem;
  position: absolute;
`

export const LinkBotaoAmarelo = styled.a`
  border-radius: 52px;
  color: black;
  border: 1px solid yellow;
  padding: 0.6rem 0.7rem;
  font-size: 1rem;
  font-weight: bold;
  text-transform: capitalize;
  background: yellow;
  position: relative;
  text-decoration: none;
  text-align: center;
  margin-left: 0.5rem;

  &:hover{
    color: gray;
    cursor: pointer;
  }   
`

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  height: 100%;
`

export const Lista = styled.ul`
  display:flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 0px 0px 15px;
`

export const ListaItem = styled.li`
  text-align:center;
  padding: 10px 0;
  margin: 0px 0.7rem;
  display: list-item;
  list-style: none;

  &:hover {
    cursor: pointer;
   
  }
`

export const LinkNormal = styled.a`
  color: rgb(255, 255, 255);
  transition: color 0.2s ease-out 0s;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  text-align:center;
  cursor: pointer;
  &:hover{
    color: rgb(150, 40, 181);
  } 
`

export const LinkAmarelo = styled.a`
  color: rgb(255, 255, 255);
  transition: color 0.2s ease-out 0s;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  text-align:center;
  cursor: pointer;
  &:hover{
    color: yellow;
  } 
`

export const Botoes = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  margin-left: auto;
  padding-right: 1rem;
`
export const Sino = styled.div`
  margin-right: 1rem;
`

