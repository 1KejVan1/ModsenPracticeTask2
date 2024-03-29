import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "./router/AppRouter";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </Provider>,
);
