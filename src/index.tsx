
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import ThemeProvider from './theme/ThemeProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);

