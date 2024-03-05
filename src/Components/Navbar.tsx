import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../Assets/IDP-dark.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Rest of the code...
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <nav className={styles.nav}>
      <div className={styles.companyLogo}>
        <img src={logo} alt="inovasi-data-pratama-logo" />
      </div>
      <div
        className={styles.menu}
        onClick={handleMenuToggle}
        role="button"
        aria-label="Toggle menu"
        onKeyDown={handleMenuToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={isMenuOpen ? `${styles.open}` : ""}>
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.navTextActive : styles.navText
              }
              to={link.path}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
