/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { FiArrowLeft, FiClock } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import { Container } from './styles';

import { Header } from '../../Components/Header';
import { ButtonText } from '../../Components/ButtonText';
import { Rating } from '../../Components/Rating';
import { Tag } from '../../Components/Tag';

import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';
import { Button } from '../../Components/Button';

export function MovieDetails() {
  const { user } = useAuth();

  const [data, setData] = useState('');

  const params = useParams();
  const navigate = useNavigate();

  const avatarUrl = `${api.defaults.baseURL}/files/${user.avatar}`;

  async function handleDeleteMovie() {
    await api
      .delete(`/notes/${params.id}`)
      .then(() => alert('Nota excluída com sucesso'));
    navigate('/').catch((error) => {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível excluir');
      }
    });
  }

  useEffect(() => {
    async function fetchMovieDetails() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchMovieDetails();
  }, []);

  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Link to="/">
            <ButtonText title="Voltar" icon={FiArrowLeft} />
          </Link>

          <header>
            <h1>{data.title}</h1>
            <Rating rating={data.rating} />
            <Button title="Excluir" onClick={handleDeleteMovie} />
          </header>

          <div className="data-user">
            <img src={avatarUrl} alt="" />
            <span>Por: {user.name}</span>

            <FiClock />
            <span>{data.created_at}</span>
          </div>

          {data.tags && (
            <div className="data-market">
              {data.tags.map((tag) => (
                <Tag key={tag.id} title={tag.name} />
              ))}
            </div>
          )}
          <p>{data.description}</p>
        </main>
      )}
    </Container>
  );
}
