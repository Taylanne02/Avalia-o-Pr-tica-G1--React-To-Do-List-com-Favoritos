import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>To-Do List com Favoritos</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favoritos">Favoritos</Link>
      </nav>
    </header>
  );
}

export default Header;