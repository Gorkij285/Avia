import React from "react";
import { useSelector } from "react-redux";
import styles from "./Flight.module.scss";
import myImage from "./S7Logo.svg";

function Flight({ price, carrier, segments }) {
  const firstSegment = segments[0];
  const secondSegment = segments[1];

  let firstTransfer = "";
  let secondTransfer = "";

  if (firstSegment.stops.length > 1) {
    firstTransfer = `${firstSegment.stops.length} ПЕРЕСАДКИ`;
  } else if (firstSegment.stops.length === 1) {
    firstTransfer = `${firstSegment.stops.length} ПЕРЕСАДКА`;
  } else if (firstSegment.stops.length === 0) {
    firstTransfer = `ПРЯМОЙ РЕЙС`;
  }

  if (secondSegment.stops.length > 1) {
    secondTransfer = `${secondSegment.stops.length} ПЕРЕСАДКИ`;
  } else if (secondSegment.stops.length === 1) {
    secondTransfer = `${secondSegment.stops.length} ПЕРЕСАДКА`;
  } else if (secondSegment.stops.length === 0) {
    secondTransfer = `ПРЯМОЙ РЕЙС`;
  }

  return (
    <div className={styles["flight-box"]}>
      <div className={styles["price-company"]}>
        <p className={styles["p"]}>{`${price} Р`}</p>
        <img
          src={`https://pics.avs.io/99/36/${carrier}.png`}
          alt="company logo"
        />
      </div>
      <div className={styles["ticket"]}>
        <div className={styles["bar"]}>
          <p
            className={styles["info"]}
          >{`${firstSegment.origin} – ${firstSegment.destination}`}</p>
          <p className={styles["value-info"]}>
            {calculateTime(firstSegment.date, firstSegment.duration)}
          </p>
        </div>
        <div className={styles["bar"]}>
          <p className={styles["info"]}>В ПУТИ</p>
          <p className={styles["value-info"]}>
            {convertMinutesToHours(firstSegment.duration)}
          </p>
        </div>
        <div className={styles["bar"]}>
          <p className={styles["info"]}>{firstTransfer}</p>
          <p className={styles["value-info"]}>
            {firstSegment.stops.join(", ")}
          </p>
        </div>
      </div>
      <div className={styles["ticket"]}>
        <div className={styles["bar"]}>
          <p
            className={styles["info"]}
          >{`${secondSegment.origin} – ${secondSegment.destination}`}</p>
          <p className={styles["value-info"]}>
            {calculateTime(secondSegment.date, secondSegment.duration)}
          </p>
        </div>
        <div className={styles["bar"]}>
          <p className={styles["info"]}>В ПУТИ</p>
          <p className={styles["value-info"]}>
            {convertMinutesToHours(secondSegment.duration)}
          </p>
        </div>
        <div className={styles["bar"]}>
          <p className={styles["info"]}>{secondTransfer}</p>
          <p className={styles["value-info"]}>
            {secondSegment.stops.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}

function convertMinutesToHours(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainderMinutes = minutes % 60;
  return `${hours}ч ${remainderMinutes}м`;
}

function calculateTime(dateString, minutes) {
  const date = new Date(dateString);
  const start = new Date(date.getTime());
  const end = new Date(date.getTime() + minutes * 60000);

  const startTime = start.toISOString().substr(11, 5);
  const endTime = end.toISOString().substr(11, 5);

  return `${endTime} – ${startTime}`;
}

export default Flight;
