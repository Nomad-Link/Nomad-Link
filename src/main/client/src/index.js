import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StateProvider } from "./store/StateProvider";
import reducer, { initialState } from "./store/Reducer";
import { CookiesProvider } from "react-cookie";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <CookiesProvider>
        <StateProvider initialState={initialState} reducer={reducer}>
          <App />
        </StateProvider>
      </CookiesProvider>
    </HelmetProvider>
  </React.StrictMode>
);
reportWebVitals();
