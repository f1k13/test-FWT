import { NavbarIconTheme, NavbarLogo } from "@/shared/ui/icons";
import styles from "../styles/navbar.module.scss";


const Navbar = () => {
  
  return (
    <div className={styles.root}>
      <div >
        <NavbarLogo />
      </div>
      <NavbarIconTheme />
    </div>
  );
};

export default Navbar;
