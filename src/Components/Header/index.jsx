import { Container, Profile } from "./styles"

import { Input } from '../Input'
import { ButtonText } from "../ButtonText"
import { Link } from "react-router-dom"

export function Header(){
    return (
        <Container>
            <h1>RocketMovies</h1>

            <Input
                placeholder="Pesquisar pelo título"
                type="text"
            />
                <div className="data-profile">
                    <Profile to="/profile">
                        <span>Marcus Vinícius</span>
                        <img src="https://github.com/viniseven.png" 
                            alt="Imagem de perfil do usuário" 
                        />
                    </Profile>

                    <Link to="/">
                        <ButtonText title="sair" />
                    </Link>
                </div>
        </Container>
    )
}