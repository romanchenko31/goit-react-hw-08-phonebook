import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthNav } from './AuthNav';
import { UserMenu } from './UserMenu';
import authSelectors from '../../Redux/auth/auth-selectors';
import style from './AppBar.module.css';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsloggedIn);
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <ul className={style.ul}>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  );
};
