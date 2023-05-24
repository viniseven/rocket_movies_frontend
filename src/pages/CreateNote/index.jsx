import { Container, Form } from "./styles"

import { Link, Navigate } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import { Header } from "../../Components/Header";
import { ButtonText } from "../../Components/ButtonText";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { TextArea } from "../../Components/TextArea";
import { Section } from "../../Components/Section";
import { InputMarket } from "../../Components/InputMarket";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { api } from "../../services/api";

export function CreateNote(){
    const [title, setTitle] = useState("")
    const [rating, setRating] = useState("")
    const [description, setDescription] =  useState("")
    const [markets, setMarkets] = useState([])
    const [newMarket, setNewMarket] = useState("")

    const navigate = useNavigate();

    function handleAddMarket(){
        setMarkets(prevState => [...prevState, newMarket])
        setNewMarket("");
    }

    function handleRemoveMarket(deleted){
        setMarkets(prevState => prevState.filter(market => market !== deleted))
    }

    async function handleNewMovie(){
        await api.post('/notes', {
            title,
            rating,
            description,
            markets
        });

        navigate("/");
        alert('Filme cadastrado com sucesso')
    }
    
    return (
        <Container>
            <Header />

            <main>
                <Link to="/">
                    <ButtonText title="Voltar"  icon={FiArrowLeft} />
                </Link>
                
                <Form>
                    <h1>Novo filme</h1>

                    <div>
                        <Input 
                            placeholder="Título"
                            type="text"
                            onChange={e => setTitle(e.target.value)}
                        />

                        <Input 
                            placeholder="Sua nota (de 0 a 5)"
                            type="number"
                            onChange={e => setRating(e.target.value)}
                        />
                    </div>

                    <TextArea 
                        placeholder="Observações"
                        onChange={e => setDescription(e.target.value)}
                    />

                    <Section title="Marcadores">
                        <div className="group-market">
                            {markets.map((market, index) => (
                                <InputMarket
                                  key={String(index)} 
                                  value={market}
                                  onClick={() => handleRemoveMarket(market)}
                              />
                            ))}
                                <InputMarket 
                                  placeholder="Novo marcador"
                                  isNew
                                  value={newMarket}
                                  onChange={e => setNewMarket(e.target.value)}
                                  onClick={handleAddMarket}
                                />
                        </div>  
                    </Section>

                    <div className="button-footer">
                        <Button title="Excluir filme" />

                        <Button title="Salvar" onClick={handleNewMovie} />
                    </div>
                </Form>
            </main>
        </Container>
    )
}