import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  let links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <h1>Inovasi Data Pratama</h1>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link className={styles.navText} to={link.path}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
