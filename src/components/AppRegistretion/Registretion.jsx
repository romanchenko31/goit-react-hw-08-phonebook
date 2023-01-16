import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperation } from '../../Redux/auth/auth-operation';

const Registretion = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperation.register({ name, email, password }));
    setEmail('');
    setName('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registretion</h2>
      <label>
        Email
        <input type="text" name="email" onChange={handleChange} />
      </label>
      <label>
        Name
        <input type="text" name="name" onChange={handleChange} />
      </label>
      <label>
        Password
        <input type="text" name="password" onChange={handleChange} />
      </label>
      <button type="submit">submit</button>
    </form>
  );
};

export { Registretion };
