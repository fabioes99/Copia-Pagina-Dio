import styled from "styled-components";


export const InputContainer = styled.div`
  width:100%;
  height: 30px;
  border-bottom: 2px solid black;
  transition: border-bottom 0.3s ease;
  display: flex;
  align-items: center;
  margin-bottom: 28px;

  &.clicked {
    border-bottom-color: rgb(127, 40, 181);
  }
`


export const IconContainer = styled.div`
  margin-right: 10px;
`

export const InputText = styled.input`
  background-color: transparent;
  color: #fff;
  width: 100%;
  border: 0;
  height: 30px;

`

export const ErrorText = styled.p`
  color: #ff0000;
  font-size: 12px;
  margin: 5px 0;
`