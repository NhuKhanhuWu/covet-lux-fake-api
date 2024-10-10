/** @format */
import styles from "./HomePage.module.css";
import NavBar from "../../components/NavBar/NavBar.jsx";
import BigBanner from "../../components/Banner/BigBanner.jsx";
import SmallBanner from "../../components/Banner/SmallBanner.jsx";
import ProductItem from "../../components/ProductItem/ProductItem.jsx";
import FlexContainer from "../../components/FlexContainer.jsx";
import ListHeader from "../../components/ListHeader/ListHeader.jsx";
import IntroSection from "../../components/IntroSection/IntroSection.jsx";
import BlogItem from "../../components/BlogItem/BlogItem.jsx";
import { BlankDivider, LineDivider } from "../../components/Divider.jsx";

import useGetData from "../../hooks/useGetData.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import RenderQueryData from "../../components/RenderQueryData.jsx";

const bigBannerData = {
  header: "BLACK FRIDAY SALE",
  text: "Discount up to 30% and free shipping for orders over $399",
  imgUrl:
    "https://images.pexels.com/photos/934069/pexels-photo-934069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  url: "/covet-lux-fake-api/products?page=1",
};

const smallBannerData = [
  {
    header: "EXPLORE INTERESTING BLOG POSTS",
    url: "/covet-lux-fake-api/blog",
    imgUrl:
      "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    header: "ABOUT COVET LUX",
    url: "/covet-lux-fake-api/infor",
    imgUrl:
      "https://images.pexels.com/photos/1937336/pexels-photo-1937336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const introData = {
  title: "What is Covet Lux",
  content:
    "Covet Lux is a minimalist e-commerce website dedicated to offering simple, elegant clothing for those who appreciate timeless fashion. Specializing in high-quality, understated pieces, Covet Lux focuses on creating a curated collection of essential wardrobe staples that are both stylish and versatile.",
  url: "/covet-lux-fake-api/infor",
};

function HomePage() {
  const { isLoading, isError, dataResponse } = useGetData("products?limit=14");

  return (
    <>
      <NavBar></NavBar>

      <main>
        {/* banners: start */}
        <div className={styles.banner}>
          <div className={styles.bigBanner}>
            <BigBanner
              imgUrl={bigBannerData.imgUrl}
              header={bigBannerData.header}
              text={bigBannerData.text}
              url={bigBannerData.url}></BigBanner>
          </div>

          {/* <div className={styles.smallBanner}> */}
          <SmallBanner
            header={smallBannerData[0].header}
            url={smallBannerData[0].url}
            imgUrl={smallBannerData[0].imgUrl}></SmallBanner>
          <SmallBanner
            header={smallBannerData[1].header}
            url={smallBannerData[1].url}
            imgUrl={smallBannerData[1].imgUrl}></SmallBanner>
          {/* </div> */}
        </div>
        {/* banners: end */}

        {/* new product: start */}
        <RenderQueryData
          isError={isError}
          isLoading={isLoading}
          isEmptyList={dataResponse.slice(0, 4).length === 0}>
          <ListHeader
            title={"Best seller"}
            url={"/covet-lux-fake-api/product"}></ListHeader>
          <FlexContainer spaceBetween={true}>
            {dataResponse.slice(0, 4).map((product, i) => (
              <ProductItem product={product} key={`new-prd-${i}`}></ProductItem>
            ))}
          </FlexContainer>
        </RenderQueryData>
        {/* new product: end */}

        {/* best seller product: start */}
        <RenderQueryData
          isError={isError}
          isLoading={isLoading}
          isEmptyList={dataResponse.slice(6, 10).length === 0}>
          <ListHeader
            title={"New product"}
            url={"/covet-lux-fake-api/product"}></ListHeader>
          <FlexContainer spaceBetween={true}>
            {dataResponse.slice(6, 10).map((product, i) => (
              <ProductItem product={product} key={`new-prd-${i}`}></ProductItem>
            ))}
          </FlexContainer>
        </RenderQueryData>
        {/* best seller product: end */}

        <LineDivider distance={2} color={"rgb(252, 108, 34)"}></LineDivider>
        {/* intro section: start */}
        <IntroSection
          header={introData.title}
          content={introData.content}
          url={introData.url}></IntroSection>
        {/* intro section: end */}
        <BlankDivider distance={0.5}></BlankDivider>

        {/* blog section: start */}
        <RenderQueryData
          isError={isError}
          isLoading={isLoading}
          isEmptyList={dataResponse.slice(11, 14).length === 0}>
          <ListHeader
            title={"New blog"}
            url={"/covet-lux-fake-api/blog"}></ListHeader>
          <FlexContainer>
            {dataResponse.slice(11, 14).map((blog, i) => (
              <BlogItem blog={blog} key={`blog-${i}`}></BlogItem>
            ))}
          </FlexContainer>
        </RenderQueryData>
        {/* blog section: end */}
      </main>

      <BlankDivider></BlankDivider>
      {/* footer: start */}
      <Footer></Footer>
      {/* footer: end */}
    </>
  );
}

export default HomePage;
