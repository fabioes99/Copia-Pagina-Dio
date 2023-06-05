import styled,{css} from 'styled-components';

export const ButtonContainer = styled.button`

background: #565666;
border-radius: 22px;
position: relative;

color: #fff;
padding: 2px 12px;
min-width: 120px;
width: 100%;

${({ variant })=> variant !== "primary" && css`
  min-width:168px;
  height:36px;

  background: #E4105D;

    &::after {
        content: '',
        position: absolute;
        border: 1px solid #4105D;
        top: -5px;
        left: -5px;
        width: calc(100% + 10px);
        height: calc(100% + 15px);
        border-radius: 22px;
    }
` }

`
