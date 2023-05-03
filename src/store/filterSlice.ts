import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeButton: 1,
  quantity: 5,
  all: true,
  direct: true,
  oneStop: true,
  twoStop: true,
  threeStop: true,
};

const filterSlice = createSlice({
  name: "listButtons",
  initialState,
  reducers: {
    setActiveButton: (state, action) => {
      state.activeButton = action.payload;
    },
    toggleAll: (state) => {
      state.all = !state.all;
      if (state.all) {
        state.direct = true;
        state.oneStop = true;
        state.twoStop = true;
        state.threeStop = true;
      } else {
        state.direct = false;
        state.oneStop = false;
        state.twoStop = false;
        state.threeStop = false;
      }
    },
    toggleDirect: (state) => {
      state.direct = !state.direct;
      if (!state.direct) {
        state.all = false;
      } else if (
        state.direct &&
        state.oneStop &&
        state.twoStop &&
        state.threeStop
      ) {
        state.all = true;
      }
    },
    toggleOneStop: (state) => {
      state.oneStop = !state.oneStop;
      if (!state.oneStop) {
        state.all = false;
      } else if (
        state.direct &&
        state.oneStop &&
        state.twoStop &&
        state.threeStop
      ) {
        state.all = true;
      }
    },
    toggleTwoStops: (state) => {
      state.twoStop = !state.twoStop;
      if (!state.twoStop) {
        state.all = false;
      } else if (
        state.direct &&
        state.oneStop &&
        state.twoStop &&
        state.threeStop
      ) {
        state.all = true;
      }
    },
    toggleThreeStops: (state) => {
      state.threeStop = !state.threeStop;
      if (!state.threeStop) {
        state.all = false;
      } else if (
        state.direct &&
        state.oneStop &&
        state.twoStop &&
        state.threeStop
      ) {
        state.all = true;
      }
    },
    quantityAdd: (state) => {
      state.quantity += 5;
    },
  },
});

export const {
  setActiveButton,
  toggleAll,
  toggleDirect,
  toggleOneStop,
  toggleTwoStops,
  toggleThreeStops,
  quantityAdd,
} = filterSlice.actions;

export default filterSlice.reducer;
