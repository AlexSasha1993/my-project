import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
        <div className="App"> 
      <header className="App-header">
        <App />
      </header>
    </div>
  </React.StrictMode>
);
