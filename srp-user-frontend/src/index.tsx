import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { persistor, store } from "./store/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Auth0Provider
            domain={import.meta.env.VITE_AUTH_DOMAIN}
            clientId={import.meta.env.VITE_CLIENT_ID}
            authorizationParams={{
              redirect_uri: window.location.origin,
              audience: import.meta.env.VITE_AUTH_AUDIENCE,
              scope: "read:current_user",
            }}
          >
            <App />
          </Auth0Provider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
