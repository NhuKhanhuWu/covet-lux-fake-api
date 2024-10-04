/** @format */
import styles from "./ProductItem.module.css";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  return (
    <Link to={`/covet-lux-fake-api/product?product_id=${product.id}`}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img
            alt={product.title}
            src={product?.image?.replace("[", "").replace('"', "")}
            className="img"></img>
          {/* <img
            alt={product.title}
            src={product?.images[1]?.replace("[", "").replace('"', "")}
            className="img"></img> */}
        </div>

        <p className={styles.title}>{product.title}</p>
        <p className={styles.descr}>{product.description.slice(0, 50)}[...]</p>

        <div>
          <Link
            to={`/covet-lux-fake-api/products/?categoryId=${product.category.id}&page=1`}
            className={styles.categoryTag}>
            {product.category.name}
          </Link>{" "}
          | <span className={styles.price}>${product.price}</span>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
