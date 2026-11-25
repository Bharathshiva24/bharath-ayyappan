import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/tokens.css';
import './styles/global.css';
import './styles/sections.css';
import './styles/themes.css';
import './styles/theme-ui.css';
import App from './App.jsx';
import ThemeProvider from './theme/ThemeProvider';

// A blocked stylesheet (e.g. fonts behind a firewall) must never stop a section from rendering.
window.addEventListener('vite:preloadError', e => e.preventDefault());

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
