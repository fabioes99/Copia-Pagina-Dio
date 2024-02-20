import styled from "styled-components";

export const WrapContainer = styled.div`
  margin-bottom: 30px;
`

export const InputContainer = styled.div`
  width:100%;
  height: 30px;
  border-bottom: 2px solid black;
  transition: border-bottom 0.3s ease;
  display: flex;
  
  align-items: center;

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
  font-size: 0.825rem;
  background-color: rgb(255, 15, 58);
  color: rgb(255, 255, 255);
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  width: auto;
}
`