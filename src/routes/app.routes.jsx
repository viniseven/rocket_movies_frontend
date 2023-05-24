import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { CreateNote } from '../pages/CreateNote';
import { MovieDetails } from '../pages/MovieDetails';
import { Profile } from '../pages/Profile';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<CreateNote />} />
      <Route path="/details/:id" element={<MovieDetails />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
