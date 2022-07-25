import { NavLink } from "react-router-dom";
import { items } from "./items";

import styles from "./NavbarMenu.module.css";

const NavbarMenu = () => {
  const menuElements = items.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink
        to={to}
        exact="true"
        activeclassname={styles.activeLink}
        className={styles.link}
      >
        {text}
      </NavLink>
    </li>
  ));

  return (
    <>
      <ul className={styles.menu}>{menuElements}</ul>
    </>
  );
};

export default NavbarMenu;
