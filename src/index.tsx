import * as React from "react";

import { persistor, store } from "./store";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Loader } from "./components";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
