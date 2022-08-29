import { createSelector } from "@reduxjs/toolkit";

const scrollDataSelector = (state) => state.data.data;
export const Datas = createSelector(scrollDataSelector, (data) => {
  return data;
});

const loading = (state) => state.data.loading;
export const isLoading = createSelector(loading, (loader) => {
  return loader;
});

const isFetchSelector = (state) => state.data.isFetching;
export const isFetch = createSelector(isFetchSelector, (data) => {
  return data;
});

const pageSelector = (state) => state.data.page;
export const pages = createSelector(pageSelector, (data) => {
  return data;
});

const dataCount = (state) => state.data.dataCount;
export const dataCountReselect = createSelector(dataCount, (data) => {
  return data;
});
