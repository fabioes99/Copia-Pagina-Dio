import React,{useContext} from 'react'
import  Input  from '../../components/Input';
import  Button  from '../../components/Button';
import Header from '../../components/Header';
import { MdEmail, MdLock, MdFlag, MdPerson} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Link from '../../components/Link';
import { AuthContext } from '../../context/auth';
import PhoneInput from '../../components/PhoneInput';

import {Form, DivTitle, Column, Container, Body, SubTitleLogin, Title, TitleLogin, Wrapper, Detail, DetailBackground} from './styles'

const schema = yup.object({
  email: yup.string().email('E-mail não valido').required('Campo obrigatório'),
  senha: yup.string().min(6, 'No mínimo 6 caracteres').required('Campo obrigatório'),
  telefone: yup.string().required('O número de telefone é obrigatório'),
    nome: yup.string().required('O nome é obrigatório')
}).required();


export default  function SignUp() {

  const { handleSignUp } = useContext( AuthContext );

  const navigate = useNavigate();

  interface IFormData{
    email: string;
    senha: string;
    nome: string;
    telefone: string;
  }

  const { control, handleSubmit, watch, formState: { errors } } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const testValue = watch(['nome','email','telefone','senha']);

  const allElementsValid = testValue.every((element) => element !== '' && element !== undefined);

  const handleClickSignIn = () => {
    navigate('/');
  }

  const onSubmit = async (formData: IFormData) => {
    handleSignUp(formData)
  }


  return (
    <>
      <Header/>
      <Container>
        <Body>
        <Column>
            <Detail>
              <DetailBackground />
            </Detail>
            <Title>
             A plataforma para você aprender com expert, dominar as principais tecnologias e entrar mais rapido nas empresas mais desejadas.
            </Title>
            <p style={{ marginTop: '2.4rem' }}> <Link nome={'VOLTAR PARA LOGIN'} link={'/'} color={'rgb(127, 40, 181)'} /></p>
           
        </Column>
        <Column>
        <Wrapper>
            <DivTitle>
              <Detail>
                <DetailBackground />
              </Detail>
              <TitleLogin>Comece agora grátis</TitleLogin>
            </DivTitle>
            
            <Form onSubmit={handleSubmit(onSubmit)}>
              <SubTitleLogin>Crie sua conta e make the change.</SubTitleLogin>
              <Input name="nome"      errorMessage={( errors.nome ? errors.nome.message : undefined  )}          control={control} placeholder="Nome completo" leftIcon={<MdPerson />} />
              <Input name="email"     errorMessage={( errors.email ? errors.email.message : undefined  )}        control={control} placeholder="Seu melhor @e-mail" leftIcon={<MdEmail/>} />
              {/*<Input name="telefone"  errorMessage={( errors.telefone ? errors.telefone.message : undefined  )}  control={control} placeholder="Celular ex:(11) 96123-4567" leftIcon={<MdFlag/>} /> */}
              <PhoneInput name="telefone"     errorMessage={( errors.telefone ? errors.telefone.message : undefined  )}        control={control} placeholder=" (11) 96123-4567" leftIcon={<MdFlag/>}/>
              <Input name="senha"     errorMessage={( errors.senha ? errors.senha.message : undefined  )}        control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
              <Button isButtonEnabled={allElementsValid} onClick={() => {}} title="Criar minha conta gratis"  /> 
            </Form>
            <p style={{ fontSize: '0.8rem' }}>
              Ao clicar em "criar minha conta grátis", declaro que aceito as <Link nome={'Politicas de Privacidade'} color={'rgb(127, 40, 181)'} />  e os <Link nome={'Termos de Uso'} link={'/'} color={'rgb(127, 40, 181)'} /> da DIO.
            </p>
            <p style={{ marginTop: '2.2rem' }}> Ja tenho conta. <Link nome={'Fazer login.'} onClick={handleClickSignIn} color={'#22DD7A'} /></p>
             
        </Wrapper>
        </Column>
        </Body>
       
      </Container>
    </>
  )
}