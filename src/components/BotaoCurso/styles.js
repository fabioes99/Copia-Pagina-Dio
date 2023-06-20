import styled from "styled-components";

export const Teste = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px 10px;
  gap: 10px;
  width: 100%;
  background: rgb(45, 45, 55);
  border-radius: 12px;
  flex: 0 0 auto;
  order: 0;
  -webkit-box-flex: 0;
  font-weight: bold;
  margin: 20px 0px;
  color: rgb(255, 255, 255) !important;

  &:hover{
    cursor: pointer;
    opacity: 0.9;
  }
`

export const Linguagem = styled.span`
  background-color: rgb(0, 0, 0);
  margin: 2px;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 8pt;
  display: inline-block;
`

export const Titulo = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
  word-break: keep-all;
`

export const Imagem = styled.img`
  width:40px;
  height:40px;
  margin-right: 5px;
`
