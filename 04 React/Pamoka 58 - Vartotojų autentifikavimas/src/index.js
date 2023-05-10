import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { PostsProvider } from './contexts/PostsContext';
import { UserProvider } from './contexts/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserProvider>
        <PostsProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PostsProvider>
    </UserProvider>
);
