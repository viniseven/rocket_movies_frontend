import { Link } from 'react-router-dom';

import { Container, Background, Form } from "./styles";

import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";

export function SignIn(){
  
  return(
    <Container>
      <Form>
         <h1>RocketMovies</h1>
         <p>Aplicação para acompanhar tudo que assistir</p>

         <h2>Faça seu login</h2>

         <Input
          placeholder="Email"
          type="text"
         />

         
        <Input
          placeholder="Senha"
          type="password"
         />

        <Button title="Entrar"/>

      </Form>
      
      <Background />
    </Container>
  )
}