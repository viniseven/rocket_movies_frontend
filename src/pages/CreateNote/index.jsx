import { Container, Form } from "./styles"

import { Header } from "../../Components/Header";
import { ButtonText } from "../../Components/ButtonText";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { TextArea } from "../../Components/TextArea";
import { Section } from "../../Components/Section";
import { Market } from "../../Components/Market";

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

                    <Section title="Marcadores">
                        <div className="group-market">
                            <Market
                                value="comédia" 
                                placeholder="Novo marcador"
                                isNew={false}
                            />

                            <Market 
                                placeholder="Novo marcador"
                                isNew={true}
                            />
                        </div>  
                    </Section>

                    <div className="button-footer">
                        <Button title="Excluir filme" />

                        <Button title="Salvar" />
                    </div>
                </Form>
            </main>
        </Container>
    )
}