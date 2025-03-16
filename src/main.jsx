import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routers/Router.jsx';
import { LoadingProvider } from './context/LoadingContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <LoadingProvider>
     <RouterProvider router={router} />
  </LoadingProvider>
  </StrictMode>,
)
