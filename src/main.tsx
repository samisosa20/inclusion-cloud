// Package
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

// styles
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.css";

// App
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <HashRouter>
      <App />
    </HashRouter>
);
