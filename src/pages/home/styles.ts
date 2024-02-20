import styled from "styled-components";

interface IFlex{
  flex: number;
}

export const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  padding-top: 2.7rem;
  background-color: #15161B;
 
`

export const LeftHalf = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  position: relative;
  width: 100%;
`

export const PerfilLink = styled.a`
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  justify-content: space-between;
  padding: 0.5rem 0;

  &:hover{
    background-color: #2E343B;
    border-radius: 7px;
  }
`

export const Info  = styled.div`
  padding-right: 2rem;
`

export const WrapperUser = styled.div`
  padding-left: 1.5rem;
`

export const ProfileSpotlight = styled.div`
  margin-left: 1.3rem;
`

export const UserPicture = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 3px solid green;
`

export const Nome = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 0.6rem;
`
export const Nivel = styled.span`
  border-radius: 10rem;
  color:white;
  background-color: #00af00;
  font-size: 75%;
  font-weight: 700;
  padding: 2px 10px;
  margin-left: 1rem;
`

export const NomeCompleto = styled.h5`
  font-size: 1.09375rem;
  line-height: 1.32;
  font-weight: 700;
  color:white;
`

export const Xperience = styled.h5`
  color:white;
  font-weight: 500;
`

export const WrapperSwitch = styled.div`
  margin: 1rem 0px 1.5rem;
  display: flex;
  justify-content: space-around;
  border: 1px solid rgb(45, 45, 55);
  border-radius: 5px;
  padding: 0.7rem 0px;
`

export const LinkPerfil = styled.a`
  background-color: rgb(85, 33, 118);
  margin: 1rem 0px 1.5rem;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  border-radius: 5px;
  padding: 0.7rem 0.7rem 0.7rem 1rem;
  color:white;
  text-decoration: none;
  line-height: 28px;

  &:hover{
    background-color:#7A31A7;
  }
`

export const RightHalf = styled.div`
  flex: 1;
`

export const Title = styled.h2`

  font-style:normal;
  font-weight: bold;
  font-size: 26px;
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

export const Column = styled.p<IFlex>`
  padding-right: 30px;
  flex: ${({ flex }) => flex };
`

export const MeusCursos = styled.div`
  margin-bottom: 3rem;
`

export const LinkCurso = styled.a`
  display: flex;
  flex-direction: row;
  padding: 12px 10px;
 
  &:hover{
    background-color: #2E343B;
    border-radius: 7px;
    cursor: pointer;
  }
`
export const Img = styled.img`
  width: 30px;
`

export const TituloCurso = styled.h5`
  margin-left: 0.5rem;
  font-size: 1.09375rem;
`

export const BotaoBranco = styled.a`
  color: #fff;
  border: 1px solid #fff;
  border-radius: 6px;
  font-weight: 700;
  width: 100%;
  font-size: 0.875rem;
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  text-align:center;
  margin-bottom: 1rem;

  &:hover{
    cursor: pointer;
    color: black;
    background-color: white;
  }
`

export const WrapperBotao = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Badge = styled.img`
  width: 70px;
  max-width: 100%;
  height: 70px;
  border-radius: 50px;
`

export const Section = styled.div`
  display: flex;
  flex-direction: row;
`

export const Paragrafo = styled.p`
  font-style: italic; 
  color: rgb(122, 134, 154);
  margin-bottom: 1rem;
  margin-left: 1rem;
`
export const ContainerProgress = styled.div`
  margin: 1rem 0;
`

export const Teste = styled.div`
position: absolute;
z-index: 999;
left: 94px;
top: 391px;
`