import { createSlice } from "@reduxjs/toolkit";

const dataState = {
  page: 1,
  isFetching: true,
  dataCount: 80,
  loading: false,
  data: [],
  errors: false
};

export const dataSlice = createSlice({
  name: "data",
  initialState: dataState,
  reducers: {
    pushScrollData: (state) => {
      state.loading = true;
    },
    pushScrollSuccess: (state, action) => {
      state.dataCount = action.payload.totalDocs;
      state.data = [...state.data, ...action.payload.docs];
      state.isFetching = false;
      state.page = state.page + 1;
      state.loading = false;
    },
    pushScrollError: (state) => {
      state.loading = true;
      state.errors = true;
    },
    pushIsFetching: (state, action) => {
      state.isFetching = action.payload;
    },
    addStart: (state) => {
      state.loading = true;
    },
    addSuccess: (state) => {
      state.loading = false;
    },
    addErrors: (state) => {
      state.errors = true;
      state.loading = false;
    },
  },
});

export const {
  pushScrollData,
  pushScrollSuccess,
  pushScrollError,
  pushIsFetching,
  addStart,
  addSuccess,
  addErrors
} = dataSlice.actions;

export const dataReducer = dataSlice.reducer;
