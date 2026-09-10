import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { applyStaticModeAttribute } from './hooks/useStaticMode';
import './styles/fonts.css';
import './styles/tokens.css';
import './styles/base.css';

applyStaticModeAttribute();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
