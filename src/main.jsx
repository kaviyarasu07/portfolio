import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Portfolio from './Portfolio.jsx';
import TechDiscuss from './TechDiscuss.jsx';

const path = window.location.pathname;

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {path === '/tech-discuss' ? <TechDiscuss /> : <Portfolio />}
    </React.StrictMode>
);