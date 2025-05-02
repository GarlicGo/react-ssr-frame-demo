import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'

export function render(_url: string, _data: any) {
  const html = renderToString(
    <StrictMode>
      <App data={_data} />
    </StrictMode>,
  )
  return { html }
}
