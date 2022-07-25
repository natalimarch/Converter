import NavbarMenu from "./NavbarMenu";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <div className={styles.row}>
        <NavbarMenu />
      </div>
    </nav>
  );
};

export default Navbar;
