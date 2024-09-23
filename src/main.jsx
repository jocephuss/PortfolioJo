import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import the root App component
import "./index.css"; // Global styles

// Render the App component inside the root div in index.html
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
