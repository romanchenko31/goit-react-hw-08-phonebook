import { Contacts } from 'components/Contacts/Contacts';
import { useSelector } from 'react-redux';
import authSelectors from 'Redux/auth/auth-selectors';
import { LogIn } from './LogIn';

export const AppLogin = () => {
  const isLoggedIn = useSelector(authSelectors.getIsloggedIn);
  return <>{isLoggedIn ? <Contacts /> : <LogIn />}</>;
};
