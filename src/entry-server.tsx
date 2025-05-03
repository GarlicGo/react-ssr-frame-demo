import { StrictMode } from 'react';
import { type RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import App from './App';

export function render(_url: string, options?: RenderToPipeableStreamOptions, data?: any) {
  return renderToPipeableStream(
    <StrictMode>
      <App data={data} />
    </StrictMode>,
    options,
  );
}
