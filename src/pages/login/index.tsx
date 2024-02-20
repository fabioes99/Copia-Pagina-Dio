import React,{useContext} from 'react'
import  Input  from '../../components/Input';
import  Button  from './Button';
import Header from '../../components/Header';
import { MdEmail, MdLock} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper} from './styles'
import { LinhaRoxa } from './Button/styles';
import { AuthContext } from '../../context/auth';

const schema = yup.object({
  email: yup.string().email('E-mail não válido').required('Campo obrigatório'),
  senha: yup.string().min(6, 'No mínimo 3 carácteres').required('Campo obrigatório'),
}).required();

export default  function Login() {

  const { handleLogin } = useContext( AuthContext );

  const navigate = useNavigate();

  interface IFormData{
    email: string;
    senha: string;
  }

  const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const onSubmit = async (formData: IFormData) => {
    handleLogin(formData)
  }

  const handleCriarConta = () => {
    navigate('/sign-up');
  }

  return (
    <>
      <Header/>
      <Container>
        <Column>
        <LinhaRoxa />
            <Title>
             A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rapido nas empresas mais desejadas.
            </Title>
        </Column>
        <Column>
        <LinhaRoxa />
        <Wrapper>
            <TitleLogin>Já tem cadastro?</TitleLogin>
            <SubTitleLogin>Faça seu login e make the change.</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input name="email"  errorMessage={( errors.email ? errors.email.message : undefined  )}  control={control} placeholder="E-mail" leftIcon={<MdEmail/>} />
              <Input name="senha"  errorMessage={( errors.senha ? errors.senha.message : undefined  )}  control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
              <Button title="Entrar" />
            </form>
            <Row>
              <EsqueciText>Esqueci a minha senha</EsqueciText>
              <CriarText onClick={ handleCriarConta }>Criar a conta</CriarText>
            </Row>
        </Wrapper>
        </Column>
      </Container>
    </>
  )
}