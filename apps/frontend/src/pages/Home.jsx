import { Link } from 'react-router';

function Home() {
  return (
    <section className="hero">
      <div className="actions">
        <Link to="/profile" className="primary-button">
          Профиль
        </Link>
      </div>
      <div className="actions">
        <Link to="/register" className="primary-button">
          Регистрация
        </Link>
      </div>
    </section>
  );
}

export default Home;
