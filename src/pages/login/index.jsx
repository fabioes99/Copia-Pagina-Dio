import React from 'react'
import  Input  from '../../components/Input';
import  Button  from '../../components/Button';
import Header from '../../components/Header/header';
import { MdEmail, MdLock} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper} from './styles'

const schema = yup.object({
  email: yup.string().email('E-mail nao valido').required('Campo obrigatorio'),
  senha: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatorio'),
}).required();

export default  function Login() {

  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  console.log(errors, isValid);

  const console = data => console.log(data);

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
            <form onSubmit={handleSubmit(console)}>
              <Input name="email"  control={control} placeholder="E-mail" leftIcon={<MdEmail/>} />
              <Input name="senha"  control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
              <Button title="Entrar" variant="secondary" onclick={handleClickSignIn} type="submit" />
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