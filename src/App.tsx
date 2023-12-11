import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './modules/shared/components/Footer';
import { Header } from './modules/shared/components/Header';
import './App.module.scss';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      {/* <Outlet />
      <Footer /> */}
    </>
  );
};
