import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';
import './styles/index.css';

declare global {
  interface Window {
    $data: any;
  }
}

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <StrictMode>
    <App data={window?.$data} />
  </StrictMode>,
);
