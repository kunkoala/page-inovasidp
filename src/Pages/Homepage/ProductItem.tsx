import React from "react";
import styles from "./ProductItem.module.css"; // Assume similar styling or adjust as necessary
import Card from "../../Components/Card";

type ProductProps = {
  product: {
    title: string;
    description: string;
    img?: string;
  };
};

const ProductItem: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className={styles.productItem}>
      <Card
        title={product.title}
        description={product.description}
        img={product.img}
      />
    </div>
  );
};

export default ProductItem;
