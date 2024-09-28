/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./general.css";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Product from "./pages/Product/Product.jsx";
import ProductDetail from "./pages/Product/ProductDetail.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import Infor from "./pages/Infor.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/covet-lux-fake-api" element={<HomePage />}></Route>
        <Route path="/covet-lux-fake-api/blog" element={<Blog />}></Route>
        <Route path="/covet-lux-fake-api/contact" element={<Contact />}></Route>
        <Route path="/covet-lux-fake-api/infor" element={<Infor />}></Route>

        {/* product: start */}
        <Route
          path="/covet-lux-fake-api/products"
          element={<Product />}></Route>
        <Route
          path="/covet-lux-fake-api/product"
          element={<ProductDetail />}></Route>
        {/* product:end */}

        {/* cart & checkout: start */}
        <Route path="/covet-lux-fake-api/cart" element={<Cart></Cart>}></Route>
        <Route
          path="/covet-lux-fake-api/checkout"
          element={<Checkout></Checkout>}></Route>
        {/* cart & checkout: end */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
