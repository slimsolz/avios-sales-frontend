import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./ProductCard.module.scss";
import moment from "moment";
import Loader from "react-loader-spinner";

const ProductCard = ({
  name,
  date,
  description,
  image,
  color,
  price,
  quantity,
  size,
}) => {
  const isLoading = false;
  const imgSrc = image[0].url;
  const created = moment.utc(date).local().format("MMMM Do YYYY");
  const desc =
    description.length > 50
      ? `${description.substring(0, 50)} ...`
      : description;
  return (
    <div className={styles.ProductCard}>
      <div className={styles.ProductCard__imgDiv}>
        <LazyLoadImage className={styles.img} alt={name} src={imgSrc} />
      </div>

      <div className={styles.ProductCard__details}>
        <h3 className={styles.title}>Name: {name}</h3>
        <h3 className={styles.title}>Color: {color}</h3>
        <h3 className={styles.title}>Price: {price}</h3>
        <h3 className={styles.title}>Size: {size}</h3>
        <h3 className={styles.title}>Quantity: {quantity}</h3>
        <h3 className={styles.title}>Date added: {created}</h3>
        <h3 className={styles.title}>Description: {desc}</h3>

        <button
          className={styles.ProductCard__addToCartBtn}
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader color="#fff" type="TailSpin" width="20" height="20" />
          ) : (
            "add to cart"
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
