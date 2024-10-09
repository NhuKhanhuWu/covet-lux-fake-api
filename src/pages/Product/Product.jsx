/** @format */
import FlexContainer from "../../components/FlexContainer.jsx";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer.jsx";
import {
  SideBarProduct,
  Category,
  PriceRange,
} from "../../components/SideBar/SideBarProduct.jsx";
import { Link } from "react-router-dom";
import GridContainer from "../../components/GridContainer.jsx";
import RenderQueryData from "../../components/RenderQueryData.jsx";
import ProductItem from "../../components/ProductItem/ProductItem.jsx";
import { BlankDivider } from "../../components/Divider.jsx";

import styles from "./Product.module.css";
import { useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { fetchFilteredProducts } from "../../redux/productsSlide.js";

function Pagination({ query, count, currPage = null }) {
  const arr = Array.from({ length: count });
  // const currPage

  return (
    <div className={styles.pagination}>
      {arr.map((_, i) => (
        <Link
          to={`${query}&page=${i + 1}`}
          key={`paginate-${i}`}
          className={`border-btn--small border-btn ${
            currPage == i + 1 ? styles.currPage : ""
          }`}>
          {i + 1}
        </Link>
      ))}
    </div>
  );
}

function Product() {
  const dispatch = useDispatch();
  // get filter
  const titleFilter = useSelector((state) => state.products.titleFilter);
  const categoryFilter = useSelector((state) => state.products.categoryFilter);
  const priceFilter = useSelector((state) => state.products.priceFilter);

  // get product
  const productList = useSelector((state) => state.products.items);

  // get product list
  useEffect(
    function () {
      dispatch(fetchFilteredProducts());
    },
    [categoryFilter, dispatch, priceFilter, titleFilter]
  );

  // render products
  const status = useSelector((state) => state.products.status);

  // // get filter query
  // const [urlQuery] = useSearchParams();
  // const [page, setPage] = useState(1);

  // const category =
  //   urlQuery.get("categoryId") === null ? "" : urlQuery.get("categoryId");
  // const title = urlQuery.get("title") === null ? "" : urlQuery.get("title");

  // const query = `products${category !== "" ? "/category" : ""}/${category}`;

  // // get product by query
  // const { dataResponse, isError, isLoading } = useGetData(query);

  // // store data in reducer
  // const [{ productList, error, loading }, dispacth] = useReducer(
  //   reducer,
  //   initProduct
  // );
  // useEffect(
  //   function () {
  //     dispacth({
  //       type: "updateData",
  //       productList: dataResponse,
  //       error: isError,
  //       loading: isLoading,
  //     });
  //   },
  //   [dataResponse, isError, isLoading]
  // );

  return (
    <>
      <NavBar></NavBar>

      <FlexContainer gap={10}>
        <SideBarProduct>
          <Category></Category>
          <PriceRange></PriceRange>
        </SideBarProduct>

        <GridContainer numCol={4} gap={5}>
          <RenderQueryData
            isError={status === "failed"}
            isLoading={status === "loading"}
            isEmptyList={productList.length === 0}>
            {productList.map((product, i) => (
              <ProductItem key={`product-${i}`} product={product} />
            ))}
          </RenderQueryData>
        </GridContainer>
      </FlexContainer>

      <BlankDivider distance={3}></BlankDivider>
      {/* <Pagination query={query} count={3} currPage={page}></Pagination> */}
      <BlankDivider></BlankDivider>

      <Footer></Footer>
    </>
  );
}

export default Product;
