import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


import {GameContextProvider} from "./store/GameContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <GameContextProvider>
            <App />
        </GameContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
