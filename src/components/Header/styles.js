import styled from "styled-components";


export const LinkBotao = styled.button`
  border: 1px solid rgb(255, 255, 255);
  margin: 0px 0.5rem;
  padding: 6px 16px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  text-transform: capitalize;
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

export const LinkNormal = styled.a`
  color: rgb(255, 255, 255);
  transition: color 0.2s ease-out 0s;
  font-size: 1rem;
  text-decoration: none;
  text-align:center;
  cursor: pointer;
  &:hover{
    color: rgb(150, 40, 181);
  } 
`

export const Lista = styled.ul`
  display:flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 0px 0px auto;
`

export const ListaItem = styled.li`
  text-align:center;
  padding: 10px 0;
  margin: 0px 0.5rem;
  display: list-item;
  list-style: none;
`


export const Row = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  `

export const Column = styled.div `
  display:flex;
  flex-direction: column;
  align-items: center;
`

export const Nav = styled.nav ` 
  background-color: rgb(21, 21, 21);
  padding: 1rem;
  display: block;
`

export const Container = styled.div`
display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0px auto;
`

export const BuscarInputContainer = styled.div `
  width:175px;
  height: 30px;
  background: #202037;
  border-radius: 8px;
  padding: 2px 5px;
  margin: 0 12px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Menu = styled.a `
   font-style: normal;
   font-size:16px;
   line-height: 25px;
   color: #FFF;
   margin-right: 12px;
   text-decoration: none;
`

export const UserPicture = styled.img`
  width:32px;
  height:32px;
  border-radius: 22px;
  border: 3px solid #fff;
`
export const Input = styled.input`
  background: transparent;
  flex:1;
  border:0;
  color:#fff;
`



