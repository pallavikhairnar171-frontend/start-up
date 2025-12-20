import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Onloading from "./components/common/Onloading.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Onloading data={'pallavi'}>
        <App />
      </Onloading>
    </BrowserRouter>
  </StrictMode>
);
