import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './modules/shared/components/footer';
import { Header } from './modules/shared/components/header';

import { CartPage } from './modules/CartPage/CartPage'; // !!!💢test

import './App.module.scss';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <CartPage />
    </>
  );
};
