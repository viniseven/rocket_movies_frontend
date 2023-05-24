import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'


import { useState } from 'react';

import { api } from "../../services/api";

import imgProfile from '../../assets/img_profile.svg'

import { useAuth } from '../../hooks/auth';

import { Container, Profile } from "./styles"
import { Input } from '../Input'
import { ButtonText } from "../ButtonText"


export function Header(props){
    const [search, setSearch] = useState("")
    const { signOut, user } = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : imgProfile;

    const navigate = useNavigate();

    const handleValueInput = (event) => {
        setSearch(event.target.value)
        props.valueInput(search)

        console.log(search)
    } 
  
    function handleUserSignOut(){
        signOut()
        navigate("/");
    }

    return (
        <Container>
                <h1>RocketMovies</h1>
                
            <Input
                placeholder="Pesquisar pelo título"
                type="text"
                onChange={handleValueInput}
            />
                    <Profile to="/profile">
                        <div>
                            <span>{user.name}</span>
                            <Link to="/">
                                <ButtonText title="sair" onClick={handleUserSignOut}/>
                            </Link>
                        </div>

                        <img src={avatarUrl}
                            alt="Imagem de perfil do usuário" 
                        />
                        
                    </Profile>            
        </Container>
    )
}