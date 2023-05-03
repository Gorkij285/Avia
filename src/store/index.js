import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filterSlice";
import listSlice from "./listSlice.js";

export default configureStore({
  reducer: {
    avia: filterSlice,
    list: listSlice,
  },
});
