import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperation } from '../../Redux/auth/auth-operation';

const LogIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    dispatch(authOperation.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h2>Login</h2>
      <label>
        Email
        <input onChange={handleChange} type="text" name="email" />
      </label>
      <label>
        Password
        <input onChange={handleChange} type="text" name="password" />
      </label>
      <button type="submit">submit</button>
    </form>
  );
};

export { LogIn };
