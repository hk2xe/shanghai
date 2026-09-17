import { Link } from 'react-router';
import PasswordField from '../components/PasswordField';

function Login() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Вход</h1>
        <p className="auth-subtitle">
          Нет аккаунта?{' '}
          <Link to="/register" className="auth-link">
            Зарегистрироваться
          </Link>
        </p>

        <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
          <div className="field">
            <label htmlFor="nickname">Никнейм</label>
            <input id="nickname" type="text" autoComplete="username" />
          </div>

          <PasswordField id="password" label="Пароль" autoComplete="current-password" />

          <button type="submit" className="primary-button">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
