import React from "react";
import { useDispatch } from "react-redux";
import styles from "./MoreButton.module.scss";
import { quantityAdd } from "../../store/filterSlice";

function MoreButton() {
  const dispatch = useDispatch();

  const activeButton = () => dispatch(quantityAdd());

  return (
    <button onClick={activeButton} className={styles["more-button"]}>
      <span className={styles["span"]}>ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!</span>
    </button>
  );
}

export default MoreButton;
