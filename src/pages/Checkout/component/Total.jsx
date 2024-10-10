/** @format */

import styles from "../Checkout.module.css";

export function Total({ total, shippingFee }) {
  return (
    <table className={`${styles.table} ${styles.productTxt} ${styles.total}`}>
      <tbody>
        <tr>
          <td>Sub-total</td>
          <td>${total}</td>
        </tr>
        <tr>
          <td>Shipping fee</td>
          <td>${shippingFee}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>${Math.round((shippingFee + total) * 100) / 100}</td>
        </tr>
      </tbody>
    </table>
  );
}
