/** @format */

import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from "../../../public/logo-no-background.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editTitle } from "../../redux/productsSlide";

function NavBar() {
  // check if login
  const isLogin = localStorage.getItem("user") !== null;

  // search product
  const [title, setTitle] = useState(
    useSelector((state) => state.products.titleFilter)
  );
  const dispacth = useDispatch();
  const navigate = useNavigate(); //redirect to product page

  function handleFilterTitle(e, title) {
    e.preventDefault();
    // if (title !== "") {
    dispacth(editTitle(title));
    navigate("/covet-lux-fake-api/products");
    // }
  }

  return (
    <nav className={styles.nav}>
      <Link to="/covet-lux-fake-api">
        <img alt="covet-lux" src={logo} className={styles.logo}></img>
      </Link>

      <ul className={styles.navLink}>
        <li>
          <Link to="/covet-lux-fake-api">HOME PAGE</Link>
        </li>
        <li>
          <Link to="/covet-lux-fake-api/products?page=1">PRODUCT</Link>
        </li>
        <li>
          <Link to="/covet-lux-fake-api/blog">BLOG</Link>
        </li>
        <li>
          <Link to="/covet-lux-fake-api/contact">CONTACT</Link>
        </li>
        <li>
          <Link to="/covet-lux-fake-api/infor">INFOR</Link>
        </li>
      </ul>

      <ul className={styles.navLogo}>
        <form
          className={styles.search}
          onSubmit={(e) => handleFilterTitle(e, title.toLowerCase())}>
          <input
            type="text"
            placeholder="Search..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit">
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </form>
        <Link to="/covet-lux-fake-api/cart">
          <ion-icon name="cart-outline"></ion-icon>
        </Link>

        {/* display differen el when login/not login */}
        {isLogin ? (
          <Link to="/covet-lux-fake-api/account">
            <span
              className="material-symbols-outlined icon"
              style={{ fontSize: "3rem", margin: 0 }}>
              account_circle
            </span>
          </Link>
        ) : (
          <Link to="/covet-lux-fake-api/login" className={styles.loginLink}>
            LOGIN
          </Link>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
