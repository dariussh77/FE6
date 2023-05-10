import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom' 
import { StartListProvider } from './Components/Contexts/StarListContext';
import { TheameProvider } from './Components/Contexts/TheamContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TheameProvider>
        <StartListProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StartListProvider>
    </TheameProvider>
);
