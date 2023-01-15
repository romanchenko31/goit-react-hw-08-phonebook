import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthNav } from './AuthNav';
import { UserMenu } from './UserMenu';
import authSelectors from '../../Redux/auth/auth-selectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsloggedIn);
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  );
};
