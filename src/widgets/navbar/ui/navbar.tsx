import { NavbarIconTheme, NavbarLogo } from "@/shared/ui/icons";
import styles from "../styles/navbar.module.scss";
import { useLayoutEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div className={styles.root}>
      <NavbarLogo />
      <div onClick={() => switchTheme()}>
        <NavbarIconTheme theme={theme}/>
      </div>
    </div>
  );
};

export default Navbar;
