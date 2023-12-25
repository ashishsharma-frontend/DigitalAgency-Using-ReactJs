// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the main App component
import App from './App.jsx';

// Import necessary components from react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Use ReactDOM.createRoot to render the app in the 'root' element
ReactDOM.createRoot(document.getElementById('root')).render(
  // Use React.StrictMode for additional development features
  <React.StrictMode>
    {/* Set up the Router for navigation */}
    <Router>
      {/* Define Routes for the application */}
      <Routes>
        {/* Route for any path, rendering the App component */}
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
