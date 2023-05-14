import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Background, Form } from "./styles";

import { FiMail, FiLock } from 'react-icons/fi';

import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";

export function SignIn(){
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  
  return(
    <Container>
      <Form>
         <h1>RocketMovies</h1>
         <p>Aplicação para acompanhar tudo que assistir</p>

         <h2>Faça seu login</h2>

         <Input
          placeholder="Email"
          type="text"
          icon={FiMail}
          onChange={e => setMail(e.target.value)}
         />

         
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
         />

        <Button title="Entrar"/>

        <Link to="/register">
          Criar conta
        </Link>
      </Form>
      
      <Background />
    </Container>
  )
}