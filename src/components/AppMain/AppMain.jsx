import { AppBar } from 'components/UserMenu/AppBar';
import { Outlet } from 'react-router-dom';

export const AppMain = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};
