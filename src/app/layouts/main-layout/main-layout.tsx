import { Outlet } from 'react-router-dom';

import { Navbar } from '@widgets';

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
