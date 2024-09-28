/** @format */

import { Link, NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from "../../../public/logo-no-background.png";

function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link to="/covet-lux-fake-api">
        <img alt="covet-lux" src={logo} className={styles.logo}></img>
      </Link>

      <ul className={styles.navLink}>
        <li>
          <NavLink to="/covet-lux-fake-api">HOME PAGE</NavLink>
        </li>
        <li>
          <NavLink to="/covet-lux-fake-api/products?page=1">PRODUCT</NavLink>
        </li>
        <li>
          <NavLink to="/covet-lux-fake-api/blog">BLOG</NavLink>
        </li>
        <li>
          <NavLink to="/covet-lux-fake-api/contact">CONTACT</NavLink>
        </li>
        <li>
          <NavLink to="/covet-lux-fake-api/infor">INFOR</NavLink>
        </li>
      </ul>

      <ul className={styles.navLogo}>
        <div className={styles.search}>
          <input type="text" placeholder="Search..." />
          <button>
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>
        <Link to="/covet-lux-fake-api/cart">
          <ion-icon name="cart-outline"></ion-icon>
        </Link>
        <Link to="/covet-lux-fake-api/account">
          <ion-icon name="person-outline"></ion-icon>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
