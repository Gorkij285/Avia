import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Transfers.module.scss";
import { RootState } from "../../types/interface";
import {
  toggleAll,
  toggleDirect,
  toggleOneStop,
  toggleTwoStops,
  toggleThreeStops,
} from "../../store/filterSlice";

function Transfers() {
  const dispatch = useDispatch();

  const activeCheck = useSelector((state: RootState) => state.avia);

  const all = () => dispatch(toggleAll());
  const direct = () => dispatch(toggleDirect());
  const oneStop = () => dispatch(toggleOneStop());
  const twoStops = () => dispatch(toggleTwoStops());
  const threeStops = () => dispatch(toggleThreeStops());

  return (
    <div className={styles["filter-box"]}>
      <p className={styles["p"]}>Количество пересадок</p>
      <div className={styles["input-box"]}>
        <input
          checked={activeCheck.all}
          onChange={() => all()}
          type="checkbox"
        />
        <label>Все</label>
      </div>
      <div className={styles["input-box"]}>
        <input
          checked={activeCheck.direct}
          onChange={() => direct()}
          type="checkbox"
        />
        <label>Без пересадок</label>
      </div>
      <div className={styles["input-box"]}>
        <input
          checked={activeCheck.oneStop}
          onChange={() => oneStop()}
          type="checkbox"
        />
        <label>1 пересадка</label>
      </div>
      <div className={styles["input-box"]}>
        <input
          checked={activeCheck.twoStop}
          onChange={() => twoStops()}
          type="checkbox"
        />
        <label>2 пересадки</label>
      </div>
      <div className={styles["input-box"]}>
        <input
          checked={activeCheck.threeStop}
          onChange={() => threeStops()}
          type="checkbox"
        />
        <label>3 пересадки</label>
      </div>
    </div>
  );
}

export default Transfers;
