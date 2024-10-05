/** @format */

import { NavLink } from "react-router-dom";
import styles from "./SideBarAcc.module.css";

function SideBarAcc() {
  return (
    <div className={styles.container}>
      <NavLink to="/covet-lux-fake-api/account">Account</NavLink>
      <NavLink to="/covet-lux-fake-api/password">Change password</NavLink>
      <NavLink to="/covet-lux-fake-api/orders">Orders</NavLink>
    </div>
  );
}

export default SideBarAcc;
