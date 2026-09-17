import { Link } from 'react-router';
import PasswordField from '../components/PasswordField';

function Register() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Регистрация</h1>
        <p className="auth-subtitle">
          Уже есть аккаунт?{' '}
          <Link to="/login" className="auth-link">
            Войти
          </Link>
        </p>

        <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
          <div className="field">
            <label htmlFor="nickname">Никнейм</label>
            <input id="nickname" type="text" minLength={3} maxLength={24} autoComplete="username" />
          </div>

          <div className="field">
            <label htmlFor="surname">Фамилия</label>
            <input id="nickname" type="text" autoComplete="surname" />
          </div>

          <div className="field">
            <label htmlFor="name">Имя</label>
            <input id="nickname" type="text" autoComplete="name" />
          </div>

          <PasswordField id="password" label="Пароль" autoComplete="new-password" minLength={6} />

          <PasswordField
            id="password_repeat"
            label="Повторите пароль"
            autoComplete="new-password"
            minLength={6}
          />

          <button type="submit" className="primary-button">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
