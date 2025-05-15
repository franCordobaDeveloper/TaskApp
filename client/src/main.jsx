import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './auth/context/AuthContext.jsx';
import { TaskProvider } from './tasks/context/TasksContext.jsx';

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <TaskProvider >
      <StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StrictMode>
    </TaskProvider>
  </AuthProvider>
);
