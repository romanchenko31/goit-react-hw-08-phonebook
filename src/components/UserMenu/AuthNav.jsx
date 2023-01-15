import { Link } from 'react-router-dom';

const AuthNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/registretion">Registretion</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export { AuthNav };
