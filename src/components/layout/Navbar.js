import { Link } from "react-router-dom";
import Container from "./Container";

import styles from "./Navbar.module.css";
import logo from "../../img/costs_logo.png";

function Navbar() {
  return (
    <div className={styles.navbar}>
      
     
      <Container>
      
       
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/Team">Council</Link>
          </li>
          <li className={styles.item}>
            <Link to="/Aboutus">About Us</Link>
          </li>
          <li className={styles.item}>
            <Link to="/collection">The Collection</Link>
          </li>
        </ul>
      </Container>
      </div>
  );
}

export default Navbar;
