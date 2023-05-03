import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./ToggleFilter.module.scss";
import { RootState } from "../../types/interface";
import { setActiveButton } from "../../store/filterSlice";

function ToggleFilter() {
  const mas = ["САМЫЙ ДЕШЕВЫЙ", "САМЫЙ БЫСТРЫЙ", "ОПТИМАЛЬНЫЙ"];

  const activeB = useSelector((state: RootState) => state.avia.activeButton);

  const dispatch = useDispatch();

  const activeButton = (a: number) => dispatch(setActiveButton(a));

  let ButtonList = mas.map((name, idx) => {
    let style =
      activeB !== idx + 1
        ? `${styles["button"]}`
        : `${styles["button"]} ${styles["activated-button"]}`;
    let border;
    if (idx === 0) {
      border = { borderRadius: "10px 0 0 10px" };
    } else if (idx === 2) {
      border = { borderRadius: "0px 10px 10px 0px" };
    }

    return (
      <button
        key={idx}
        onClick={() => activeButton(idx + 1)}
        className={style}
        style={border}
      >
        <span className={styles["span"]}>{name}</span>
      </button>
    );
  });

  return <div className={styles["list-buttons"]}>{ButtonList}</div>;
}

export default ToggleFilter;
