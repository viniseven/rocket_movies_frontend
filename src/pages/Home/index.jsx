import { Container, Content } from './styles'

import { Header } from '../../Components/Header'
import { Button } from '../../Components/Button'

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
            </Content>
        </Container>
    )
}