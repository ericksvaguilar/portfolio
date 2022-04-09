import NavLink from "components/NavLink";

import styles from "./index.module.scss";

const Navbar = () => (
  <nav className={styles.navbar}>
    <ul>
      <li>
        <NavLink href="/" name="Home" />
      </li>
      <li>
        <NavLink href="/blog" name="Blog" />
      </li>
      <li>
        <NavLink href="/about" name="Sobre" />
      </li>
    </ul>
  </nav>
);

export default Navbar;
