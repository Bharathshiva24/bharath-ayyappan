import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/tokens.css';
import './styles/global.css';
import './styles/sections.css';
import App from './App.jsx';

// A blocked stylesheet (e.g. fonts behind a firewall) must never stop a section from rendering.
window.addEventListener('vite:preloadError', e => e.preventDefault());

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
