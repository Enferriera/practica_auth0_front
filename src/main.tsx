//Ejemplo basado en proyecto con Vite. Archivo main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import  Auth0ProviderWithNavigate  from "./components/Auth0/Auth0ProviderWithNavigate.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <App />
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode>
);
