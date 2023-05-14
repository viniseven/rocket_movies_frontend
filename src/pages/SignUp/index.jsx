import { useState } from 'react';
import { Link } from 'react-router-dom';

import { api } from '../../services/api';

import { Container, Background, Form } from "./styles";

import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";

export function SignUp(){
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp(){
    if(!name || !surname || !email || !password){
      return alert('Preencha todos os campos')
    }
    if(password.length < 8){
      return alert('Insira uma senha de no mínimo 8 caracteres')
    }

    api.post("/users", { name, surname, email, password})
      .then(() => alert('Usuário cadastrado com sucesso'))
      .catch(error => {
        if(error.response){
          alert(error.response.data.message);
        }else{
          alert('Não foi possível cadastrar')
        }
      })
    }

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
          onChange={e => setName(e.target.value)}
         />

         <Input
          placeholder="Sobrenome"
          type="text"
          icon={FiUser}
          onChange={e => setSurname(e.target.value)}
         />

         <Input
          placeholder="Email"
          type="text" 
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
         />

         
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
         />

        <Button title="Cadastrar" onClick={handleSignUp}/>

        <Link to="/" >
         <FiArrowLeft />
          Voltar para o login
        </Link>

      </Form>
      
      <Background />
    </Container>
  )
}