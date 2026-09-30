import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route
      path="/product/:id"
      element={<ProductDetails />}
    />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
