import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './modules/shared/components/FooterConponent';
import { Header } from './modules/shared/components/HeaderComponent';
import './scssStyles/blocks/_page.scss';

export const App: React.FC = () => {
  return (
    <div className="page">
      <Header />
      <main className="page__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
