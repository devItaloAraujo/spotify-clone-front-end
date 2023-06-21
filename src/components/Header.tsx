import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { getUser } from '../services/userAPI';
import Carregando from '../pages/carregando';

function Header() {
  const [user, setUser] = useState('');

  getUser().then((data) => {
    setUser(data.name);
  });

  return (
    <div>
      {
      (user.length > 0)
      && (
        <header data-testid="header-component">
          <h2 data-testid="header-user-name">
            { user }
          </h2>
          <nav>
            <NavLink to="/search" data-testid="link-to-search">Pesquisa</NavLink>
            { ' ' }
            <NavLink to="/favorites" data-testid="link-to-favorites">Favoritas</NavLink>
            { ' ' }
            <NavLink to="/profile" data-testid="link-to-profile">Perfil</NavLink>
          </nav>
        </header>
      )
      }
      {
      (user.length === 0)
      && (
        <Carregando />
      )
      }
    </div>
  );
}

export default Header;
