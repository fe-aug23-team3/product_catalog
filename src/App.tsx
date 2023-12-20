import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './modules/shared/components/FooterConponent';
import { Header } from './modules/shared/components/HeaderComponent';
import './App.module.scss';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
