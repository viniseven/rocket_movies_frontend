import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/auth';

import { Container, Profile } from "./styles"
import { Input } from '../Input'
import { ButtonText } from "../ButtonText"


export function Header(){
    const { signOut, user } = useAuth();
    const navigate = useNavigate();

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
            />
                <div className="data-profile">
                    <Profile to="/profile">
                        <span>{user.name}</span>
                        <img src="https://github.com/viniseven.png" 
                            alt="Imagem de perfil do usuário" 
                        />
                    </Profile>

                    <Link to="/">
                        <ButtonText title="sair" onClick={handleUserSignOut}/>
                    </Link>
                </div>
        </Container>
    )
}