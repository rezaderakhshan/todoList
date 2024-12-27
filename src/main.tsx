import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ThemeRegistery from "./theme/theme-registery.tsx";
import { Provider } from "react-redux";
import { store } from "./store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeRegistery>
        <App />
      </ThemeRegistery>
    </Provider>
  </StrictMode>
);
