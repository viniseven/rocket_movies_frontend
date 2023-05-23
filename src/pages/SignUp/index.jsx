import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';


import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";

import { Container, Background, Form } from "./styles";

import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';


import { api } from '../../services/api';

export function SignUp(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp(){
    if(!name || !email || !password){
      return alert('Preencha todos os campos')
    }
    if(password.length < 8){
      return alert('Insira uma senha de no mínimo 8 caracteres')
    }

    api.post("/users", {name, email, password})
      .then(() => alert('Usuário cadastrado com sucesso'))
      navigate("/")

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