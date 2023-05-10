import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BooksProvider} from './components/contexts/BookContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BooksProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </BooksProvider>
);
