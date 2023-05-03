import React from "react";
import styles from "./Logo.module.scss";
import logo from "./Logo.svg";

function Logo() {
  return (
    <div className={styles["logo-box"]}>
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Logo;
