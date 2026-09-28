import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import ProductProvider from "./context/Productcontext.jsx";
import CartProvider from './context/CartContext.jsx';
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
     
        <ProductProvider>
           <CartProvider>
            <App />
            </CartProvider>
        </ProductProvider>
    </React.StrictMode>
);