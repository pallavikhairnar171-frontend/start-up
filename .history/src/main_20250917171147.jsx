import { StrictMode, useContext, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Onloading from "./components/common/Onloading.jsx";
import NavContext, { NavBarContext } from "./context/NavContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Onloading data={'pallavi'}>
       <NavContext>
        <App />
       </NavContext>
      </Onloading>
    </BrowserRouter>
  </StrictMode>
);
