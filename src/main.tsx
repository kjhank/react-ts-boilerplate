import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const ROOT_NODE = document.querySelector('#root');
const root = createRoot(ROOT_NODE!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
