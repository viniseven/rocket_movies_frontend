import { Container, Content } from './styles'

import { Header } from '../../Components/Header'
import { Button } from '../../Components/Button'
import { Card } from '../../Components/Card';
import { Rating } from '../../Components/Rating';
import { Tag } from '../../Components/Tag';

import { FiPlus } from 'react-icons/fi';

export function Home(){
    return (
        <Container>
            <Header />

            <Content>
                <div>
                    <h1>Meus filmes</h1>

                    <Button 
                        icon={FiPlus}
                        title="Adicionar filme"
                    />
                </div>

                <div className='content-data'>
                <Card 
                    title="Se eu fosse você"
                >
                    <Rating rating={3} />

                    <p>
                    Em Se Eu Fosse Você, Cláudio (Tony Ramos) é um publicitário bem sucedido, dono de sua própria agência,
                     e é casado com Helena (Glória Pires), uma professora de música que cuida de um coral infantil. 
                     Acostumados com a rotina do dia-a-dia e do casamento de tantos anos, eles volta e meia têm uma 
                     discussão. Um dia eles têm uma briga maior do que o normal, que faz com que algo inexplicável 
                     aconteça: eles trocam de corpos. Apavorados, Cláudio e Helena tentam aparentar normalidade até 
                     que consigam revertar a situação. Porém, para tanto, eles terão que assumir por completo a vida 
                     do outro.
                    </p>

                    <div className='content-tags'>
                        <Tag title="comédia"/>
                        <Tag title="nacional"/>
                    </div>
    
                </Card>

                <Card 
                    title="Se eu fosse você"
                >
                    <Rating rating={3} />

                    <p>
                    Em Se Eu Fosse Você, Cláudio (Tony Ramos) é um publicitário bem sucedido, dono de sua própria agência,
                     e é casado com Helena (Glória Pires), uma professora de música que cuida de um coral infantil. 
                     Acostumados com a rotina do dia-a-dia e do casamento de tantos anos, eles volta e meia têm uma 
                     discussão. Um dia eles têm uma briga maior do que o normal, que faz com que algo inexplicável 
                     aconteça: eles trocam de corpos. Apavorados, Cláudio e Helena tentam aparentar normalidade até 
                     que consigam revertar a situação. Porém, para tanto, eles terão que assumir por completo a vida 
                     do outro.
                    </p>
    
                </Card>

                <Card 
                    title="Se eu fosse você"
                >
                    <Rating rating={3} />

                    <p>
                    Em Se Eu Fosse Você, Cláudio (Tony Ramos) é um publicitário bem sucedido, dono de sua própria agência,
                     e é casado com Helena (Glória Pires), uma professora de música que cuida de um coral infantil. 
                     Acostumados com a rotina do dia-a-dia e do casamento de tantos anos, eles volta e meia têm uma 
                     discussão. Um dia eles têm uma briga maior do que o normal, que faz com que algo inexplicável 
                     aconteça: eles trocam de corpos. Apavorados, Cláudio e Helena tentam aparentar normalidade até 
                     que consigam revertar a situação. Porém, para tanto, eles terão que assumir por completo a vida 
                     do outro.
                    </p>

                    <div className='content-tags'>
                        <Tag title="comédia"/>
                        <Tag title="nacional"/>
                    </div>
    
                </Card>
                </div> 
            </Content>
        </Container>
    )
}