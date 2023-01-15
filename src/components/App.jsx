import { Routes, Route } from 'react-router-dom';
import { AppRegistretion } from './AppRegistretion/AppRegistretion';
import { AppLogin } from './AppLogin/AppLogin';
import { AppBar } from './UserMenu/AppBar';
import { authOperation } from 'Redux/auth/auth-operation';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const App = () => {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(authOperation.fetchCurrentUser());
  }, [dispath]);

  return (
    <>
      <AppBar />
      <Routes>
        <Route index element={<AppLogin />} />
        <Route path="registretion" element={<AppRegistretion />} />
        <Route path="contacts" element={<AppLogin />} />
        <Route path="login" element={<AppLogin />} />
      </Routes>
    </>
  );
};
