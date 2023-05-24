import { Container, Content } from './styles';

import { Link } from 'react-router-dom';

import { Header } from '../../Components/Header';
import { Button } from '../../Components/Button';
import { Card } from '../../Components/Card';
import { Rating } from '../../Components/Rating';
import { Tag } from '../../Components/Tag';

import { FiPlus } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

export function Home() {
  const [searchMovie, setSearchMovie] = useState('');
  const [movies, setMovies] = useState([]);

  const dataValueInputSearch = (valueSearch) => {
    setSearchMovie(valueSearch);
  };

  const navigate = useNavigate();

  function handleCreateNewMovie() {
    navigate('/new');
  }

  function handlePageDetailsMovie(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchMovieNotes() {
      const response = await api.get(`/notes?title=${searchMovie}`);
      setMovies(response.data.notesWithTags);
    }
    fetchMovieNotes();
  }, [, searchMovie]);

  return (
    <Container>
      <Header valueInput={dataValueInputSearch} />

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

        <div className="content-data">
          {movies.map((movie) => (
            <Card
              key={String(movie.id)}
              title={movie.title}
              onClick={() => handlePageDetailsMovie(movie.id)}
            >
              <Rating rating={movie.rating} />

              <p>{movie.description}</p>

              <div className="content-tags">
                {movie.tags.map((tag) => (
                  <Tag key={tag.id} title={tag.name} />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Content>
    </Container>
  );
}
