import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextFilter } from "./Context/filter.jsx";
import { Contextcart } from "./Context/cart.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Contextcart>
      <ContextFilter>
      <App />
    </ContextFilter>
    </Contextcart>
    
  </React.StrictMode>
);
