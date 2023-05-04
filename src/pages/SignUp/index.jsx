import { Link } from 'react-router-dom';

import { Container, Background, Form } from "./styles";

import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { ButtonText } from '../../Components/ButtonText';

export function SignUp(){
  
  return(
    <Container>
      <Form>
         <h1>RocketMovies</h1>
         <p>Aplicação para acompanhar tudo que assistir</p>

         <h2>Crie sua conta</h2>

         
         <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
         />

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

        <Button title="Cadastrar"/>

        <ButtonText title="Voltar para o login" icon={FiArrowLeft} />

      </Form>
      
      <Background />
    </Container>
  )
}