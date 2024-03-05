import React from "react";
import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";

import companyImage from "../../Assets/front-logo.png";
import softwareImage from "../../Assets/software_solutions.jpg";
import consultingStockImage from "../../Assets/consulting_stock.jpg";
import telecommunicationsImage from "../../Assets/telecommunications_stock.jpg";

import { ProductOverview } from "./ProductOverview";

export const Homepage: React.FC = () => {
  const products_1 = [
    {
      title: "IT and Software Solutions",
      description:
        "Offering tailor-made software and IT solutions designed to meet your specific business needs, enhancing operational efficiency and productivity.",
      img: softwareImage,
    },
    {
      title: "Management Consulting",
      description:
        "Specialized in developing unique software solutions that solve specific problems, improve processes, and drive innovation.",
      img: consultingStockImage,
    },
    {
      title: "Telecommunications Equipment Wholesale",
      description:
        "A wide range of high-quality computer, electronic, and telecommunications equipment to support your business infrastructure.",
      img: telecommunicationsImage,
    },
  ];

  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.homeActionBox}>
          <div className={styles.homeActionContent}>
            <h1>Empower Your Business with Comprehensive IT Solutions</h1>
            <p>
              We offer a wide range of IT and software solutions to help your
              business grow and thrive in the digital age.
            </p>
            <div className={styles.ctaContainer}>
              <Link to="/about" className={styles.cta}>
                Learn more about us
              </Link>
            </div>
          </div>
          <div className={styles.homeActionContent}>
            <img src={companyImage} alt="company-logo" />
          </div>
        </div>

        <ProductOverview products={products_1} />
      </div>
    </>
  );
};
