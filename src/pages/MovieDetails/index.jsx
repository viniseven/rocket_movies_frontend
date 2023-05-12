import { Container } from "./styles";

import { FiArrowLeft, FiClock } from "react-icons/fi";

import { Header } from "../../Components/Header";
import { ButtonText } from "../../Components/ButtonText";
import { Rating } from "../../Components/Rating";
import { Market } from "../../Components/Market";

export function MovieDetails(){
    return (
        <Container>
            <Header />

            <main>
                <ButtonText title="Voltar"  icon={FiArrowLeft} />
                
                <header>
                    <h1>Interestellar</h1>
                    <Rating rating={4}/>
                </header>

                <div className="data-user">
                    <img src="https://github.com/viniseven.png" alt="" />
                    <span>Por Marcus Vinícius</span>

                    <FiClock />
                    <span>23/05/2022 às 08:00</span>
                </div>

                <div className="data-market">
                    <Market
                        value="ficção científica"
                    />
                </div>
                
            </main>
        </Container>
    )
}