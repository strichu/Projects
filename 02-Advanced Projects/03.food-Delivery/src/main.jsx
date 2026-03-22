import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserContex from "./context/UserContex.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <UserContex>
      <App />
    </UserContex>
    ,
  </Provider>,
);
