import { Route, Routes, useLocation } from 'react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

import Header from './components/Header.jsx';

import './App.css';

const NO_HEADER_ROUTES = ['/login', '/register'];

function App() {
  const location = useLocation();
  const showHeader = !NO_HEADER_ROUTES.includes(location.pathname);

  return (
    <div className="app">
      {showHeader && <Header />}

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
