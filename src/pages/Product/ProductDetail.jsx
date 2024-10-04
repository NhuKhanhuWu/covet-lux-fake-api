/** @format */

import { useSearchParams } from "react-router-dom";
import FlexContainer from "../../components/FlexContainer.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";
import styles from "./ProductDetail.module.css";
import useGetData from "../../hooks/useGetData.jsx";
import RenderQueryData from "../../components/RenderQueryData.jsx";
import { BlankDivider } from "../../components/Divider.jsx";
import { useEffect, useState } from "react";

// component
import ListHeader from "../../components/ListHeader/ListHeader.jsx";
import ProductItem from "../../components/ProductItem/ProductItem.jsx";
import { AmountInput } from "../../components/AmountInput/AmountInput.jsx";
import { Images } from "./component_detail/Images.jsx";
import { ProductInfor } from "./component_detail/ProductInfor.jsx";
import { ByNowBtn } from "./component_detail/ByNowBtn.jsx";
import { DescripAndReview } from "./component_detail/DescripAndReview.jsx";
import { ToCartBtn } from "./component_detail/ToCartBtn.jsx";

// redux
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlide";

function ProductDetail() {
  // product details
  const [url] = useSearchParams();
  const productId = url.get("product_id");
  const {
    dataResponse: productDetail,
    isLoading: isLoading_productDetail,
    isError: isError_productDetail,
  } = useGetData(`products/${productId}`);
  const [amount, setAmount] = useState(1);

  // scroll to top of the page (to fix when click to recommend product, page stay in the same prosition)
  useEffect(
    function () {
      window.scrollTo(0, 0);
    },
    [productId]
  );

  // recommened products
  // store category id in state
  const [category, setCategory] = useState(null);

  // get category id when productDetail fully loaded
  useEffect(
    function () {
      if (productDetail.category)
        setCategory(productDetail.category.replace(" ", "%20"));
    },
    [productDetail]
  );

  // get product by category
  const {
    dataResponse: recommenedProduct,
    isLoading: isLoading_recommenedProduct,
    isError: isError_recommenedProduct,
  } = useGetData(
    category ? `products/category/${productDetail.category}` : null
  );

  // handle add to cart
  const dispatch = useDispatch();

  function handleAddToCart(product, amount, setAdd) {
    // add product to cart
    dispatch(addToCart({ id: product.id, amount: amount }));

    // show message
    setAdd(true);
  }

  return (
    <>
      <NavBar></NavBar>

      {/* product infor: start */}
      <FlexContainer elClass={styles.productInfor}>
        <RenderQueryData
          isError={isError_productDetail}
          isLoading={isLoading_productDetail}
          isEmptyList={productDetail.length === 0}>
          <Images product={productDetail}></Images>

          <div className={styles.productText}>
            <ProductInfor product={productDetail}></ProductInfor>

            <FlexContainer elClass={styles.amount}>
              <AmountInput
                amount={amount}
                setAmount={setAmount}
                id={"quantity"}></AmountInput>
              <p>100 available product(s)</p>
            </FlexContainer>

            <FlexContainer elClass={styles.btn} gap={2}>
              <ByNowBtn
                product={productDetail}
                amount={amount}
                handleAddToCart={handleAddToCart}></ByNowBtn>
              <ToCartBtn
                product={productDetail}
                amount={amount}
                handleAddToCart={handleAddToCart}
              />
            </FlexContainer>
          </div>
        </RenderQueryData>
      </FlexContainer>
      {/* product infor: end */}

      {/* desription & reviews: start */}
      <BlankDivider distance={4}></BlankDivider>
      <DescripAndReview product={productDetail}></DescripAndReview>
      <BlankDivider distance={2}></BlankDivider>
      {/* desription & reviews: end */}

      {/* recommened product: start */}
      <RenderQueryData
        isError={isError_recommenedProduct}
        isLoading={isLoading_recommenedProduct}
        isEmptyList={
          !Array.isArray(recommenedProduct) || recommenedProduct.length === 0
        }>
        <ListHeader
          title={"You may like"}
          url={`/covet-lux-fake-api/products/?categoryId=${category}&page=1`}></ListHeader>
        <FlexContainer spaceBetween={true}>
          {Array.isArray(recommenedProduct) &&
            recommenedProduct
              .slice(0, 5)
              .map((product, i) => (
                <ProductItem
                  key={`recommen-${i}`}
                  product={product}></ProductItem>
              ))}
        </FlexContainer>
      </RenderQueryData>
      {/* recommened product: end */}

      <BlankDivider></BlankDivider>
      <Footer></Footer>
    </>
  );
}

export default ProductDetail;
