import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
    width: 80%;
    margin: 2.25rem auto;
    border-radius: 8px;
    padding: 0.6rem 1.5rem;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    color: rgb(255, 255, 255);
    border: 1px solid rgb(86, 86, 86);
    transition: all 0.2s ease 0s;
    cursor: default;
    opacity: 0.5;
    background-color: transparent;
    text-align: center;
    ${props =>
        !props.disabled &&
        css`
          cursor: pointer;
        `
      }

    &:hover{
        background-color: rgb(86, 86, 86);
    }


    ${props =>
        props.disabled &&
        css`
            opacity: 0.5;
            background-color: rgb(86, 86, 86);
            cursor: default;
        `
      }
    
` 

