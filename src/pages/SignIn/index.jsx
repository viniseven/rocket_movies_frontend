import { Link } from 'react-router-dom';

import { Container, Background, Form } from "./styles";

import { FiMail, FiLock } from 'react-icons/fi';

import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { ButtonText } from '../../Components/ButtonText';

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
          icon={FiMail}
         />

         
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
         />

        <Button title="Entrar"/>

        <ButtonText title="Criar conta" />

      </Form>
      
      <Background />
    </Container>
  )
}