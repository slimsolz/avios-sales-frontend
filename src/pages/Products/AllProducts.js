import React, { useEffect } from "react";
import { useQuery } from "react-query";
import Layout from "../../components/Layout/Layout";
import PageLoader from "../../components/PageLoader/PageLoader";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./AllProducts.module.scss";
import { getAllProducts } from "./services";

const AllProducts = () => {
  let cards;
  const { isLoading, data, isError, error } = useQuery(
    "products",
    getAllProducts
  );

  useEffect(() => {
    if (isError) console.log(error);
  }, [isError, error]);

  // console.log(data);

  if (!isLoading && !isError) {
    cards = data.map((product) => {
      const {
        id,
        date_uploaded,
        product_description,
        product_name,
        product_varieties: { color, image, price, quantity, size },
      } = product;

      return (
        <ProductCard
          key={id}
          date={date_uploaded}
          name={product_name}
          description={product_description}
          image={image}
          color={color}
          price={price}
          quantity={quantity}
          size={size}
        />
      );
    });
  }

  return (
    <Layout>
      <div className={styles.AllProducts}>
        {isLoading ? (
          <PageLoader />
        ) : (
          <div className={styles.AllProducts__cards}>{cards}</div>
        )}
      </div>
    </Layout>
  );
};

export default AllProducts;
