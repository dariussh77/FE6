import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CountriesProvider } from './contexts/CountriesContext';
import { PrekesProvider } from './contexts/PrekesContext';
import { BrowserRouter } from 'react-router-dom'; //router

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CountriesProvider> {/* Context Countries */}
    <PrekesProvider>{/* Context Prekės */}
      <BrowserRouter>{/* Router */}
        <App />
      </BrowserRouter>
    </PrekesProvider>
  </CountriesProvider>
);