import { Container, Form, Avatar } from "./styles";

import { Link } from "react-router-dom";

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { ButtonText } from "../../Components/ButtonText";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";

export function Profile(){
    return (
        <Container>
            <header>
                <Link to="/">
                    <ButtonText title="Voltar"  icon={FiArrowLeft}  />
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/viniseven.png" alt="Imagem de perfil do usuário" />

                    <label htmlFor="avatar">
                        <FiCamera />
                    </label>    
                </Avatar>

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
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                />

                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                />

                <Button 
                    title="Salvar"
                />
            </Form>
        </Container>
    )
}