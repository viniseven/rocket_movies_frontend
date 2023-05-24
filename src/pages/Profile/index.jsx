/* eslint-disable react/jsx-no-bind */
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

import { api } from '../../services/api';

import { useAuth } from '../../hooks/auth';

import { Container, Form, Avatar } from './styles';
import imgProfile from '../../assets/img_profile.svg';

import { ButtonText } from '../../Components/ButtonText';
import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : imgProfile;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const updated = { name, email, password, oldPassword };

    const userUpdated = Object.assign(user, updated);

    await updateProfile({ user: userUpdated, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <ButtonText title="Voltar" icon={FiArrowLeft} />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="Imagem de perfil do usuário" />

          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file" onChange={handleChangeAvatar} />
          </label>
        </Avatar>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="Email"
          type="text"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={(e) => setOldPassword(e.target.value)}
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  );
}
