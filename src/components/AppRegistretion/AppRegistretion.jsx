import { AppLogin } from 'components/AppLogin/AppLogin';
import { Registretion } from './Registretion';
import { useSelector } from 'react-redux';
import authSelectors from 'Redux/auth/auth-selectors';

export const AppRegistretion = () => {
  const isRegistretion = useSelector(authSelectors.getIsRegistretion);
  const isLoggedIn = useSelector(authSelectors.getIsloggedIn);
  return <>{isRegistretion || isLoggedIn ? <AppLogin /> : <Registretion />}</>;
};
