import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchListSearchId = createAsyncThunk(
  "listFilter/fetchListSearchId",
  async function (_, { rejectWithValue }) {
    try {
      const response = await axios.get(
        "https://aviasales-test-api.kata.academy/search"
      );
      return response.data.searchId;
    } catch (error) {
      console.log("ЧТО-ТО С ЗАПРОСОМ", error);
      rejectWithValue(error);
    }
  }
);
export const fetchListItems = createAsyncThunk(
  "listFilter/fetchList",
  async function (x, { dispatch }) {
    const arr = [];
    try {
      const response = await axios.get(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${x}`
      );
      const { tickets, stop } = await response.data;
      arr.push(...tickets);
      if (!stop) {
        dispatch(fetchListItems(x));
      }
      if (stop) {
        dispatch(stopLoading(x));
      }
    } catch (error) {
      if (error.code === "ERR_BAD_RESPONSE") {
        dispatch(fetchListItems(x));
      }
    }
    return arr;
  }
);

const initialState = {
  data: [],
  status: null,
  error: null,
  SearchId: "",
  loading: true,
};

const listFilter = createSlice({
  name: "listFilter",
  initialState,
  reducers: {
    stopLoading(state) {
      state.loading = false;
    },
  },
  extraReducers: {
    [fetchListSearchId.pending]: (state, action) => {
      state.error = null;
      state.todos = action.payload;
    },
    [fetchListSearchId.fulfilled]: (state, action) => {
      state.SearchId = action.payload;
    },
    [fetchListSearchId.rejected]: (state) => {
      state.SearchId = "rejected";
    },

    [fetchListItems.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchListItems.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.data.push(...action.payload);
    },
    [fetchListItems.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export const { stopLoading } = listFilter.actions;

export default listFilter.reducer;
