import React from 'react'
import  Input  from '../../components/Input';
import  Button  from '../../components/Button';
import Header from '../../components/Header/header';
import { MdEmail, MdLock} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper} from './styles'

export default function Login() {

  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/feed');
  }

  return (
    <>
      <Header/>
      <Container>
        <Column>
            <Title>
             A plataforma para você aprender com expert, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title>
        </Column>
        <Column>
        <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>Faça seu login e make the change.</SubTitleLogin>
            <form>
              <Input placeholder="E-mail" leftIcon={<MdEmail/>} />
              <Input placeholder="E-mail" type="password" leftIcon={<MdLock/>}/>
              <Button title="Entrar" variant="secondary" onclick={handleClickSignIn} type="button" />
            </form>
            <Row>
              <EsqueciText>Esqueci a minha senha</EsqueciText>
              <CriarText>Criar a conta</CriarText>
            </Row>
        </Wrapper>
        </Column>
      </Container>
    </>
  )
}