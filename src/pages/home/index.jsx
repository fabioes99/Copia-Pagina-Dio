import React from 'react'
import { Link } from 'react-router-dom'

import  Button  from '../../components/Button';
import Header from '../../components/Header/header';

export default function home() {
  return (
    <>
      <Header/>
      <Button title="teste 2"></Button>
      <Button variant="secondary" title="teste 3"></Button>
      <Link to="/login">Fazer login</Link>
    </>
  )
}