import { Routes, Route } from 'react-router-dom';
import { AppRegistretion } from './AppRegistretion/AppRegistretion';
import { AppLogin } from './AppLogin/AppLogin';
import { AppMain } from './AppMain/AppMain';
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
      <Routes>
        <Route path="" element={<AppMain />}>
          <Route path="registretion" element={<AppRegistretion />} />
          <Route path="contacts" element={<AppLogin />} />
          <Route path="login" element={<AppLogin />} />
        </Route>
      </Routes>
    </>
  );
};
