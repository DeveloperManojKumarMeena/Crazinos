import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Images from "./Data/Image.jsx";
import ProductData from "./Data/ProductData.jsx";

createRoot(document.getElementById("root")).render(
  <Images>
    <ProductData>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductData>
  </Images>
);
