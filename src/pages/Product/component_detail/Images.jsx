/** @format */

import styles from "../ProductDetail.module.css";

/** @format */
export function Images({ product }) {
  return (
    <div className={styles.productImg}>
      <img
        className="img"
        alt={product.title}
        src={product.image}
        style={{ width: "90%" }}
        loading="lazy"></img>
    </div>
  );
}
