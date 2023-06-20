import styled from 'styled-components';

export const ButtonContainer = styled.button`
    width: 100%;
    margin: 3.3rem auto 2.2rem;
    border-radius: 30px;
    border: 0px;
    padding: 0.6rem 1.5rem;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    background: rgb(134, 71, 173);
    color: rgb(255, 255, 255);
    position: relative;
    cursor: pointer;
    transition: all 0.2s ease 0s;
    text-align: center;

    &:after{
      content: "";
      position: absolute;
      left: calc(-0.5rem - 1px);
      top: calc(-0.5rem - 1px);
      width: calc(100% + 1rem);
      height: calc(100% + 1rem);
      border: 1px solid rgb(134, 71, 173);
      border-radius: 1.5rem;
    }

    &:hover{
      box-shadow: 0 0 15px 3px rgb(134, 71, 173);
  }
    
` 

export const LinhaRoxa = styled.div`
  height: 0.5rem;
  background: linear-gradient( 270deg, rgb(50, 33, 78) -3.55%, rgb(135, 71, 175) 100.21% );
  width: 100%;
  max-width: 6rem;
  border-radius: 1rem;
  margin-bottom: 2.2rem;
`

