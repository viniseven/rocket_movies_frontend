import { Container, Form } from "./styles"

import { FiArrowLeft } from 'react-icons/fi';

import { Header } from "../../Components/Header";
import { ButtonText } from "../../Components/ButtonText";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { TextArea } from "../../Components/TextArea";
import { Section } from "../../Components/Section";
import { InputMarket } from "../../Components/InputMarket";

export function CreateNote(){
    return (
        <Container>
            <Header />

            <main>
                <ButtonText title="Voltar"  icon={FiArrowLeft} />

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
                            <InputMarket
                                value="comédia" 
                                placeholder="Novo marcador"
                                isNew={false}
                            />

                            <InputMarket 
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