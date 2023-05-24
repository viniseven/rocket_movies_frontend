import { Container, Content } from './styles'

import { Link } from 'react-router-dom';

import { Header } from '../../Components/Header'
import { Button } from '../../Components/Button'
import { Card } from '../../Components/Card';
import { Rating } from '../../Components/Rating';
import { Tag } from '../../Components/Tag';

import { FiPlus } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api';

export function Home(){
    const [searchMovie, setSearchMovie] = useState("")
    const [movies, setMovies] = useState([])

    const dataValueInputSearch = (valueSearch) => {
        setSearchMovie(valueSearch)
    }

    useEffect(() => {
        async function fetchMovieNotes(){
            const response = await api.get(`/notes?title=${searchMovie}`)
            const { notesWithTags } = response.data
            setMovies(notesWithTags)
        }
        fetchMovieNotes()

    },[searchMovie])

    const navigate = useNavigate();

    function handleCreateNewMovie(){
        navigate("/new")
    }

    return (
        <Container>
            <Header valueInput={dataValueInputSearch}/>

            <Content>
                <div>
                    <h1>Meus filmes</h1>

                    <Link to="/new">
                        <Button 
                            icon={FiPlus}
                            title="Adicionar filme"
                            onClick={handleCreateNewMovie}
                        />
                    </Link>
                </div>

                <div className='content-data'>
                    {
                        movies.map(movie =>( 

                    <Card
                        key={String(movie.id)}
                        title={movie.title}
                    >
                        <Rating rating={movie.rating} />

                        <p>{movie.description}</p>

                        <div className='content-tags'>
                            <Tag title="comédia"/>
                            <Tag title="nacional"/>
                        </div>
                    </Card>
                        ))
                    }
                </div> 
            </Content>
        </Container>
    )
}