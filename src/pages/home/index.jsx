import React from 'react'
import { Link } from 'react-router-dom'

import  Button  from '../../components/Button';

export default function home() {
  return (
    <>
      <h1>Home</h1>
      <Button title="teste 2"></Button>
      <Button variant="secondary" title="teste 3"></Button>
      <Link to="">Fazer login</Link>
    </>
  )
}