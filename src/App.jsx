/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./general.css";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import Infor from "./pages/Infor.jsx";

import Product from "./pages/Product/Product.jsx";
import ProductDetail from "./pages/Product/ProductDetail.jsx";

import Cart from "./pages/Cart/Cart.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";
import BuySuccess from "./pages/Checkout/BuySuccess.jsx";

import Login from "./pages/Login_Signup/Login.jsx";
import Signup from "./pages/Login_Signup/Signup.jsx";

import Account from "./pages/Account/Account.jsx";
import Orders from "./pages/Orders/Orders.jsx";
import OrderDetail from "./pages/Orders/OrderDetail.jsx";

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
        <Route
          path="/covet-lux-fake-api/buy_success"
          element={<BuySuccess></BuySuccess>}></Route>
        {/* cart & checkout: end */}

        {/* login, signin: start */}
        <Route
          path="/covet-lux-fake-api/login"
          element={<Login></Login>}></Route>
        <Route
          path="/covet-lux-fake-api/signup"
          element={<Signup></Signup>}></Route>
        {/* login, signin: end */}

        {/* acccount, order: start */}
        <Route
          path="/covet-lux-fake-api/account"
          element={<Account></Account>}></Route>
        <Route
          path="/covet-lux-fake-api/orders"
          element={<Orders></Orders>}></Route>
        <Route
          path="/covet-lux-fake-api/order"
          element={<OrderDetail></OrderDetail>}></Route>
        {/* acccount, order: end */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
