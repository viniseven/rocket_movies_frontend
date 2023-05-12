import { Container } from "./styles";

import { FiArrowLeft, FiClock } from "react-icons/fi";

import { Header } from "../../Components/Header";
import { ButtonText } from "../../Components/ButtonText";
import { Rating } from "../../Components/Rating";
import { Tag } from "../../Components/Tag";

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
                    <Tag
                        title="Ficção Científica"
                    />

                    <Tag
                        title="Drama"
                    />

                    <Tag
                        title="Família"
                    />
                </div>

                <p>
                Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de 
                data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de 
                dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar 
                com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando 
                mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam 
                até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco 
                de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de 
                sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas 
                potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em 
                homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial 
                Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade 
                irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de 
                Cooper devasta Murphy.
                </p>
                
            </main>
        </Container>
    )
}