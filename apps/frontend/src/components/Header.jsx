import { Link } from 'react-router';

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">
          上海
        </Link>

        <nav className="nav">
          <Link to="/login" className="login-button">
            Войти
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
