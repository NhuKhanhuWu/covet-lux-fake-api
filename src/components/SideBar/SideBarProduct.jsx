/** @format */

import useGetData from "../../hooks/useGetData";
import { Link, useSearchParams } from "react-router-dom";
import styles from "./SideBarProduct.module.css";
import RenderQueryData from "../RenderQueryData.jsx";
import { useEffect, useRef, useState } from "react";

function Category() {
  // get all category
  const {
    dataResponse: categories,
    isLoading,
    isError,
  } = useGetData("products/categories");

  // highlight current category
  const [url] = useSearchParams();
  const currCategory = url.get("categoryId");

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
          {categories.map((catgr, i) => (
            <Link
              className={catgr == currCategory ? "orange-text" : ""}
              key={`category-${i}`}
              to={`/covet-lux-fake-api/products/?categoryId=${catgr}`}>
              {catgr.slice(0, 1).toUpperCase() + catgr.slice(1)}
            </Link>
          ))}
        </div>
      </RenderQueryData>
    </div>
  );
}

function PriceRange({ dispacth }) {
  const priceFrom = useRef(null);
  const priceTo = useRef(null);

  // store query in state
  const [query, setQuery] = useState(null);
  const { dataResponse, isLoading, isError } = useGetData(query);
  // console.log(dataResponse?.statusCode, isLoading, isError);

  function handlePriceFilter(e) {
    e.preventDefault();
    const newQuery = `products/?price_min=${priceFrom.current.value}&price_max=${priceTo.current.value}`;
    setQuery(newQuery); //update query state => trigger API call
  }

  useEffect(
    function () {
      if (!dataResponse?.statusCode) {
        // Dispatch the new product list when the data is successfully fetched
        dispacth({
          type: "updateData",
          productList: dataResponse,
          error: isError,
          loading: isLoading,
        });
      }
    },
    [dataResponse, dispacth, isError, isLoading]
  );

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
