import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import BarLoader from "react-spinners/BarLoader";
import "./List.scss";
import Flight from "../Flight/Flight";
import MoreButton from "../MoreButton/MoreButton";

function List() {
  const loading = useSelector((state) => state.list.loading);

  const load = loading ? <BarLoader color="#2196F3" width="500" /> : <></>;
  const myValue = useSelector((state) => state.list.data);

  const sortButton = useSelector((state) => state.avia.activeButton);

  const filter = useSelector((state) => state.avia);

  if (Array.isArray(myValue)) {
    let sortedArr = [...myValue];

    const { quantity, direct, oneStop, twoStop, threeStop } = filter;

    const zero = direct ? 0 : null;
    const one = oneStop ? 1 : null;
    const two = twoStop ? 2 : null;
    const three = threeStop ? 3 : null;

    const mas = [zero, one, two, three].filter((el) => el !== null);

    const filteredArr = sortedArr.filter(
      (el) =>
        mas.includes(el.segments[0].stops.length) ||
        mas.includes(el.segments[1].stops.length)
    );

    if (sortButton === 1) {
      filteredArr.sort((a, b) => a.price - b.price);
    } else if (sortButton === 2) {
      filteredArr.sort(
        (a, b) =>
          a.segments[0].duration +
          a.segments[1].duration -
          (b.segments[0].duration + b.segments[1].duration)
      );
    }

    const newArr = filteredArr.filter((element, index) => index % 2 === 0);

    const footer = filteredArr.length>1 ? <MoreButton /> : <h2>Совпадений не найдено</h2>

    return (
      <div className="list-wrapper">
        {load}
        {newArr.slice(0, quantity).map((el) => {
          return (
            <Flight
              key={Math.random() * 10000}
              price={el.price}
              carrier={el.carrier}
              segments={el.segments}
            />
          );
        })}
        {footer}
      </div>
    );
  } else {
    return <h2>Загрузка...</h2>;
  }
}

export default List;

