import styled from "styled-components";
import Banner from '../../assets/banner-play.png'

export const Container = styled.main`

  max-width: 1200px;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: start;
  justify-content: flex-start;
  width: 100%;
  align-items: flex-start;
 

  position: relative;
  z-index: 4;
`

export const LeftHalf = styled.div`
  flex: 2;
  margin: 3rem 3rem 0;
`

export const RightHalf = styled.div`
  flex: 1;
`

export const Title = styled.h2`

  font-style:normal;
  font-weight: bold;
  font-size: 56px;
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

export const ImageContainer = styled.div`
  width: 100%;
  height: 465px;
  
  position: absolute;
  z-index: 2;
`

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: linear-gradient(99.06deg, rgb(0, 0, 0) 45.8%, rgba(0, 0, 0, 0) 90.54%);
`

export const Image = styled.div`
  width: 100%;
  height: 465px;
  position: absolute;
  background: url(${Banner});
  background-size: cover;
  background-position: center;
`;