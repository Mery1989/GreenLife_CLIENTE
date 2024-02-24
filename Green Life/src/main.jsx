import React from "react";
import ReactDOM from "react-dom/client";
/*
importamos bootstarp en la app
Si lo situo en un sitio previo a mi reenderizado de css
gana bootstrap y no mi código
*/
import "bootstrap/dist/css/bootstrap.min.css";

//enrutar
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.jsx";

// punto de entrada de la app, 1º archivo que se carga
ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);
