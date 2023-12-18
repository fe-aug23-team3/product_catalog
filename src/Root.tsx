import React from 'react';
import {
  Routes,
  Route,
  HashRouter as Router,
  Navigate,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './modules/HomePage/HomePage';
import { NotFoundPage } from './modules/NotFoundPage/NotFoundPage';
import { PhonePage } from './modules/PhonePage/PhonePage';
import { PhoneDetailsPage } from './modules/PhoneDetailsPage/PhoneDetailsPage';
import { CartPage } from './modules/CartPage/CartPage';

import { PhonesProvider } from './store/GlobalProvider';
import { OfStock } from './modules/OfStock/OfStock';
import { Favourites } from './modules/FavouritesPage';

export const Root = () => (
  <PhonesProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="phones">
            <Route index element={<PhonePage />} />
            <Route path=":phoneId?" element={<PhoneDetailsPage />} />
          </Route>
          <Route path="tablets" element={<OfStock />} />
          <Route path="accessories" element={<OfStock />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="favourites" element={<Favourites />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  </PhonesProvider>
);
