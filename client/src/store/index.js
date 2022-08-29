import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { dataReducer } from "./reducer";
import { all, fork } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import { pushScrollWatcher, addWatcher } from "./saga";

function* RootSaga() {
  yield all([fork(pushScrollWatcher), fork(addWatcher)]);
}

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
  devTools: false,
});

sagaMiddleware.run(RootSaga);
