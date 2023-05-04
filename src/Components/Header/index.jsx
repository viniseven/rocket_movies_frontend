import { Container, Profile } from "./styles"
import { Input } from '../Input'
import { ButtonText } from "../ButtonText"

export function Header(){
    return (
        <Container>
            <h1>RocketMovies</h1>

            <Input
                placeholder="Pesquisar pelo título"
                type="text"
            />

            <Profile>
                <div>
                    <span>Bem vindo, </span>
                    <span>Marcus Vinícius</span>
                    <ButtonText title="sair" />
                </div>

                <img src="https://github.com/viniseven.png" alt="Imagem de perfil do usuário" />
            </Profile>
        </Container>
    )
}