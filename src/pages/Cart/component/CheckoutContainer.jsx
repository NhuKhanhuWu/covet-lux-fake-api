/** @format */

import { Link } from "react-router-dom";
import styles from "../Cart.module.css";

export function CheckoutContainer() {
  return (
    <>
      <Link
        to={"/covet-lux-fake-api/checkout"}
        className={`fill-btn ${styles.checkoutBtn}`}>
        Checkout
      </Link>
    </>
  );
}
