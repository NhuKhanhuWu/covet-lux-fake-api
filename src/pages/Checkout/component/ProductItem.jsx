/** @format */
import FlexContainer from "../../../components/FlexContainer.jsx";
import styles from "../Checkout.module.css";

export function ProductItem({ product }) {
  return (
    <tr>
      <td>
        <FlexContainer margin={0} gap={1}>
          <img
            alt={product.title}
            src={product.image}
            className={`img`}
            style={{ width: "9rem" }}
            loading="lazy"></img>
          <div
            className={`columnContent ${styles.productTxt}`}
            style={{ width: "60%" }}>
            <p>{product.title}</p>
            <p>X{product.amount}</p>
            <p>${product.price}</p>
          </div>
        </FlexContainer>
      </td>
      <td className={styles.productTxt}>${product.amount * product.price}</td>
    </tr>
  );
}
