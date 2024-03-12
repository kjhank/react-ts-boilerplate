import { useState } from 'react';
import logo from './logo.svg';

import '@/styles/main.css';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="app-wrapper">
      <header className="app-header">
        <img
          alt="logo" className="app-logo"
          src={logo}
        />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => setCount(current => current + 1)} type="button">
            count is:
            {' '}
            {count}
          </button>
        </p>
        <p>
          Edit
          {' '}
          <code>App.tsx</code>
          {' '}
          and save to test HMR updates.
        </p>
        <p>
          <a
            href="https://reactjs.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            Learn React
          </a>
          {' | '}
          <a
            href="https://vitejs.dev/guide/features.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
};
