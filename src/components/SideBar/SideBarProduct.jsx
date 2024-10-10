/** @format */

import useGetData from "../../hooks/useGetData";
import styles from "./SideBarProduct.module.css";
import RenderQueryData from "../RenderQueryData.jsx";
import { useRef } from "react";

// redux
import { useSelector } from "react-redux";
import { editCategory, editPrice } from "../../redux/productsSlide.js";
import { useDispatch } from "react-redux";

function Category() {
  // get all category
  const {
    dataResponse: categories,
    isLoading,
    isError,
  } = useGetData("products/categories");

  // get curr category
  const currCategory = useSelector((state) => state.products.categoryFilter);

  // set filter category
  const dispatch = useDispatch();

  return (
    <div className={styles.category}>
      <p className={styles.sectionHeader}>Categories</p>
      <RenderQueryData
        isError={isError}
        isLoading={isLoading}
        isEmptyList={categories.length === 0}>
        <div
          className="columnContent"
          style={{ marginBottom: "1.5rem", gap: "2rem" }}>
          <p
            onClick={() => dispatch(editCategory(""))}
            className={currCategory === "" ? "orange-text" : ""}>
            All category
          </p>

          {categories.map((catgr, i) => (
            <p
              onClick={() => {
                dispatch(editCategory(encodeURI(catgr)));
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className={encodeURI(catgr) == currCategory ? "orange-text" : ""}
              key={`category-${i}`}>
              {catgr.slice(0, 1).toUpperCase() + catgr.slice(1)}
            </p>
          ))}
        </div>
      </RenderQueryData>
    </div>
  );
}

function PriceRange() {
  const priceFrom = useRef(null);
  const priceTo = useRef(null);

  // update price range to redux
  const dispacth = useDispatch();
  function handlePriceFilter(e) {
    const from = priceFrom.current.value !== "" ? priceFrom.current.value : 0;
    const to =
      priceTo.current.value !== "" ? priceTo.current.value : 9999999999;

    e.preventDefault();
    dispacth(editPrice([from, to]));
  }

  return (
    <div>
      <p className={styles.sectionHeader}>Price range</p>

      <form
        className={`${styles.priceForm}`}
        onSubmit={(e) => handlePriceFilter(e)}>
        <div>
          <input
            type="number"
            min={0}
            placeholder="From"
            id="price_from"
            ref={priceFrom}></input>

          <input
            type="number"
            min={0}
            placeholder="To"
            id="price_to"
            ref={priceTo}></input>
        </div>

        <button type="submit" className={`border-btn border-btn--small`}>
          Search
        </button>
      </form>
    </div>
  );
}

function SideBarProduct({ children }) {
  return <div className={styles.sideBar}>{children}</div>;
}

export { SideBarProduct, Category, PriceRange };
