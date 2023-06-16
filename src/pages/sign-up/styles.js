import styled from "styled-components";

export const Container = styled.main`

  display: flex;
  justify-content: center;
  padding: 0px 1.5rem;
  min-height: calc(100vh - 3.4375rem);

`

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin: 4.25rem 0px;
  width: 100%;
  max-width: 1200px;
`
export const Column = styled.div`
  display: block;
`

export const Title = styled.h2`
  font-weight: 900;
  font-size: 34px;
  width: 310px;
  margin-bottom: 20px;
  line-height: 38px;

  color: #fff;
`

export const Wrapper = styled.div`
  max-width: 340px;
`

export const DivTitle = styled.div`
  margin-bottom: 1.2rem;
  padding: 0px;
`
export const Detail = styled.div`
  padding: 0px;
  margin: 0px 0px 2rem;
  width: 100%;
  display: flex;
  -webkit-box-pack: start;
  justify-content: start;
`

export const DetailBackground = styled.div`
  height: 0.5rem;
  background: linear-gradient(178.66deg, rgba(30, 25, 44, 0.2) 19.52%, rgba(86, 27, 133, 0.2) 56.74%, rgba(184, 115, 217, 0.2) 95.58%);
  width: 100%;
  max-width: 6rem;
  border-radius: 1rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 20.75rem;
  background-color: transparent;
  border-radius: 1rem;
`


export const TitleLogin = styled.h1`
  font-style:normal;
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 20px;
  line-height: 44px;
`

export const SubTitleLogin = styled.p`
  margin-bottom: 35px;
`


export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`
