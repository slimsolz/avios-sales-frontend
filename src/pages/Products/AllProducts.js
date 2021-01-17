import React, { useEffect } from "react";
import { useQuery } from "react-query";
import Layout from "../../components/Layout/Layout";
import PageLoader from "../../components/PageLoader/PageLoader";
import ProductCard from "../../components/ProductCard/ProductCard";
import Auth from "../../utils/Auth";
import styles from "./AllProducts.module.scss";
import { getAllProducts, getAllSellerProducts } from "./services";

const AllProducts = () => {
  let cards;
  const { role, id } = Auth.getRole();

  const { isLoading, data, isError, error } = useQuery(
    role === "seller" ? ["products", parseInt(id)] : "products",
    role === "seller" ? getAllSellerProducts : getAllProducts
  );

  useEffect(() => {
    if (isError) console.log(error);
  }, [isError, error]);

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
          role={role}
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
          <div style={{ width: "100%" }}>
            <button className={styles.AllProducts__newProduct}>
              New Product
            </button>
            <div className={styles.AllProducts__cards}>{cards}</div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AllProducts;
