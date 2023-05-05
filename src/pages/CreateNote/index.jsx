import { Container, Form } from "./styles"

import { Header } from "../../Components/Header";
import { ButtonText } from "../../Components/ButtonText";
import { Input } from "../../Components/Input";
import { TextArea } from "../../Components/TextArea";

export function CreateNote(){
    return (
        <Container>
            <Header />

            <main>
            <ButtonText title="Voltar" />

            <Form>
                <h1>Novo filme</h1>

                <div>
                    <Input 
                        placeholder="Título"
                        type="text"
                    />

                    <Input 
                        placeholder="Sua nota (de 0 a 5)"
                        type="number"
                    />
                </div>

                <TextArea 
                    placeholder="Observações"
                />

            </Form>
            </main>
        </Container>
    )
}