import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

/**
 * @param {string} _url
 */
export function render(_url, data) {
  const html = renderToString(
    <StrictMode>
      <App data={data} />
    </StrictMode>,
  );
  return { html };
}
