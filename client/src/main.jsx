import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import global_en from "./constants/en/global.json";
import global_de from "./constants/de/global.json";
import global_tr from "./constants/tr/global.json";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

i18next.init({
  fallbackLng: "EN",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    EN: {
      global: global_en,
    },
    TR: {
      global: global_tr,
    },
    DE: {
      global: global_de,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
);