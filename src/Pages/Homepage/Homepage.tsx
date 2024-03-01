import React from "react";
import styles from "./Homepage.module.css";
import { ProductOverview } from "./ProductOverview";

export const Homepage: React.FC = () => {
  const products_1 = [
    {
      title: "IT and Software Solutions",
      description:
        "Offering tailor-made software and IT solutions designed to meet your specific business needs, enhancing operational efficiency and productivity.",
    },
    {
      title: "Custom Software Development",
      description:
        "Specialized in developing unique software solutions that solve specific problems, improve processes, and drive innovation.",
    },
    {
      title: "Computer and Telecommunications Equipment Wholesale",
      description:
        "A wide range of high-quality computer, electronic, and telecommunications equipment to support your business infrastructure.",
    },
  ];

  const products_2 = [
    {
      title: "Telecommunications Services",
      description:
        "Providing both wired and wireless telecommunications solutions to ensure your business stays connected with cutting-edge technology",
    },
    {
      title: "Management Consulting",
      description:
        "Expert advice to navigate complex business challenges, offering strategies for growth, optimization, and innovation.",
    },
    {
      title: "Digital Platform Development",
      description:
        "Custom web portals and digital platforms designed to enhance your online presence and engage with your audience effectively.",
    },
  ];

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeActionBox}>
        <div className={styles.homeActionContent}>
          <h1>Inovasi Data Pratama</h1>
          <p>Empower Your Business with Comprehensive IT Solutions</p>
          <div>
            <button>Contact Us</button>
          </div>
        </div>
      </div>
      <div className={styles.productContainer}>
        <ProductOverview products={products_1} />
        <h2>Wakakakawaw</h2>
        <ProductOverview products={products_2} />
      </div>
    </div>
  );
};
