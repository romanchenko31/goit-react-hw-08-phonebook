import { useDispatch, useSelector } from 'react-redux';
import { authOperation } from 'Redux/auth/auth-operation';
import { Link } from 'react-router-dom';
import authSelectors from '../../Redux/auth/auth-selectors';

export const UserMenu = () => {
  const getUserName = useSelector(authSelectors.getUserName);
  const getUserEmail = useSelector(authSelectors.getUserEmail);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{getUserName}</p>
      <p>{getUserEmail}</p>
      <button type="button" onClick={() => dispatch(authOperation.logOut())}>
        Logout
      </button>
    </div>
  );
};
