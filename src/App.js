import React, { useEffect } from "react";
import { fetchListSearchId, fetchListItems } from "./store/listSlice";
import { useDispatch } from "react-redux";
import "./App.scss";
import Transfers from "./components/Transfers/Transfers";
import ToggleFilter from "./components/ToggleFilter/ToggleFilter.tsx";
import List from "./components/List/List";
import Logo from "./components/Logo/Logo";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListSearchId())
      .then((action) => {
        dispatch(fetchListItems(action.payload));
      })
      .catch((e) => console.log(e));
  }, [dispatch]);

  return (
    <div className="App">
      <Logo />

      <div className="left">
        <Transfers />
      </div>

      <div className="right">
        <ToggleFilter />
        <List />
      </div>
    </div>
  );
}

export default App;
