import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CardProvider } from './components/contexts/CardContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CardProvider>
        <App />
    </CardProvider>
);
