import { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/userAPI';
import Carregando from '../carregando';

function Login() {
  const [name, setName] = useState('');
  const [isNameInvalid, setIsNameInValid] = useState(true);
  const [wasClicked, setWasClicked] = useState(false);
  const navigate = useNavigate();

  const handleName = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setName(target.value);
    setIsNameInValid(target.value.length < 3);
  };

  const handleClick = () => {
    setWasClicked(true);
    createUser({ name }).then(() => {
      navigate('/search');
    });
  };

  return (
    <div>
      {
      (!wasClicked)
        ? (
          <div>
            <img
              src="/logo.png"
              alt="logo-trybetunes"
            />
            <input
              id="name"
              type="text"
              placeholder="ual é o seu nome?"
              value={ name }
              onChange={ handleName }
              data-testid="login-name-input"
            />
            <button
              id="login-submit"
              data-testid="login-submit-button"
              disabled={ isNameInvalid }
              onClick={ handleClick }
            >
              Entrar

            </button>
          </div>
        )
        : (<Carregando />)
    }
    </div>
  );
}

export default Login;
