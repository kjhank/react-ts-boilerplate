import { useState } from 'react';
import { Theme } from '@/theme';
import logo from './logo.svg';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Theme>
      <div className="App">
        <header className="App-header">
          <img
            alt="logo" className="App-logo"
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
              className="App-link"
              href="https://reactjs.org"
              rel="noopener noreferrer"
              target="_blank"
            >
              Learn React
            </a>
            {' | '}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              Vite Docs
            </a>
          </p>
        </header>
      </div>
    </Theme>
  );
};

export default App;
