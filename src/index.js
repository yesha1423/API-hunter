
import { createRoot } from "react-dom/client";
import { AuthContextProvider } from "./Context/AuthContext";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <AuthContextProvider>
  <BrowserRouter>
    <App />
 </BrowserRouter>
 </AuthContextProvider>
);
