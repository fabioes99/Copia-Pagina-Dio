import React from 'react';
import  Input  from '../../components/Input';
import  Button  from '../../components/Button';
import Header from '../../components/Header';
import { MdEmail, MdLock, MdFlag, MdPerson} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from '../../services/api'
import Link from '../../components/Link';

import {Form, DivTitle, Column, Container, Body, SubTitleLogin, Title, TitleLogin, Wrapper, Detail, DetailBackground} from './styles'

const schema = yup.object({
  email: yup.string().email('E-mail nao valido').required('Campo obrigatorio'),
  senha: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatorio'),
  telefone: yup.string()
    .matches(/^\d{10}$/, 'Numero de telefone invalido')
    .required('O número de telefone e obrigatório'),
    nome: yup.string().required('O nome e obrigatorio')
}).required();


export default  function SignUp() {

  const navigate = useNavigate();

  interface IFormData{
    email: string;
    senha: string;
    nome: string;
    telefone: string;
  }

  const { control, handleSubmit, formState: { errors }, watch } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: 'onSubmit'
  });

  const testValue = watch(['nome','email','telefone','senha']);

  const allElementsValid = testValue.every((element) => element !== '' && element !== undefined);

  const onSubmit = async (formData: IFormData) => {
    try{
      const { data } = await api.get(`users?email=${formData.email}&senha=${formData.senha}`);
      if( data.length === 1){
        navigate('/feed');
      }else{
        alert('Email ou senha invalido');
      }
    }catch{
      alert('houve um erro');
    } 
  }

  const handleClickSignIn = () => {
    navigate('/');
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
             A plataforma para voce aprender com expert, dominar as principais tecnologias e entrar mais rapido nas empresas mais desejadas.
            </Title>
            <p style={{ marginTop: '2.4rem' }}> <Link nome={'VOLTAR PARA LOGIN'} link={'/'} color={'rgb(127, 40, 181)'} /></p>
           
        </Column>
        <Column>
        <Wrapper>
            <DivTitle>
              <Detail>
                <DetailBackground />
              </Detail>
              <TitleLogin>Comece agora gratis</TitleLogin>
            </DivTitle>
            
            <Form onSubmit={handleSubmit(onSubmit)}>
              <SubTitleLogin>Crie sua conta e make the change.</SubTitleLogin>
              <Input name="nome"      errorMessage={( errors.nome ? errors.nome.message : undefined  )}  control={control} placeholder="Nome completo" leftIcon={<MdPerson />} />
              <Input name="email"     errorMessage={( errors.email ? errors.email.message : undefined  )}  control={control} placeholder="Seu melhor @e-mail" leftIcon={<MdEmail/>} />
              <Input name="telefone"  errorMessage={( errors.telefone ? errors.telefone.message : undefined  )}  control={control} placeholder="Celular ex:(11) 96123-4567" leftIcon={<MdFlag/>} />
              <Input name="senha"     errorMessage={( errors.senha ? errors.senha.message : undefined  )}  control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
              <Button isButtonEnabled={allElementsValid} title="Criar minha conta gratis" onClick={handleClickSignIn} />
            </Form>
            <p style={{ fontSize: '0.8rem' }}>
              Ao clicar em "criar minha conta gratis", declaro que aceito as <Link nome={'Politicas de Privacidade'} color={'rgb(127, 40, 181)'} />  e os <Link nome={'Termos de Uso'} link={'/'} color={'rgb(127, 40, 181)'} /> da DIO.
            </p>
            <p style={{ marginTop: '2.2rem' }}> Ja tenho conta. <Link nome={'Fazer login.'} onClick={handleClickSignIn} color={'#22DD7A'} /></p>
             
        </Wrapper>
        </Column>
        </Body>
       
      </Container>
    </>
  )
}