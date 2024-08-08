import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";
import { TodoContextProvider } from "./context/TodoContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </ThemeContextProvider>
);
