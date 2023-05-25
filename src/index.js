import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

// Use createRoot to create a Root object
const root = createRoot(document.getElementById('root'));

// Call the render method on the Root object to render the app
root.render(<App />);

