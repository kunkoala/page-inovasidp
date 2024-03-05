import React from "react";
import styles from "./ProductOverview.module.css";
import ProductItem from "./ProductItem";

type Product = {
  title: string;
  description: string;
  img?: string;
};

type Props = {
  products: Product[];
};

export const ProductOverview: React.FC<Props> = ({ products }) => {
  return (
    <div className={styles.poContainer}>
      <div className={styles.poContent}>
        {products.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
    </div>
  );
};
