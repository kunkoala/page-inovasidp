import React from "react";
import Card from "../../Components/Card";
import styles from "./ProductOverview.module.css";

type Product = {
  title: string;
  description: string;
};

type Props = {
  products: Product[];
};

export const ProductOverview: React.FC<Props> = ({ products }) => {
  return (
    <div className={styles.poContainer}>
      <div className={styles.poContent}>
        {products.map((product, index) => (
          <Card
            key={index}
            title={product.title}
            description={product.description}
            img={"https://via.placeholder.com/150"}
          />
        ))}
      </div>
    </div>
  );
};
