
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log("House of Gains: Initializing Application...");

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("House of Gains: Critical Error - Root element not found.");
  throw new Error("Could not find root element to mount to");
}

try {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log("House of Gains: Application Mounted Successfully.");
} catch (error) {
  console.error("House of Gains: Runtime Error during mount:", error);
}
