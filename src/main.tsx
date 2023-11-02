import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import { Provider } from "react-redux";
import { store } from "./entities/redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
