import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';

// Use non-null assertion operator (!) to tell TypeScript that 'root' element exists
// Or use a type guard to handle null case
const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
