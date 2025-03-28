// filepath: c:\Users\Alison\Documents\Grad Schools\UW Madison\GEOG 777\Project 2\ever_wading_birds\src\index.js
import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import ErrorBoundary from './ErrorBoundary.js'; 

const App = React.lazy(() => import('./App.js')); 

const root = createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </ErrorBoundary>
);