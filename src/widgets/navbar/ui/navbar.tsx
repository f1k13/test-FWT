import { NavbarIconTheme, NavbarLogo } from "@/shared/ui/icons";
import styles from "../styles/navbar.module.scss";
import { useLayoutEffect, useState } from "react";
import { setLocalStorage } from "@/shared/lib/local-storage";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  setLocalStorage("theme", theme);
  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div className={styles.root}>
      <NavbarLogo />
      <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        <NavbarIconTheme />
      </div>
    </div>
  );
};

export default Navbar;
