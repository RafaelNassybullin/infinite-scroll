import { put, call, takeLatest } from "redux-saga/effects";
import { getApi, addApi } from "../api";
import {
  pushScrollSuccess,
  pushScrollError,
  addSuccess,
  addErrors
} from "./reducer";

function* pushScrollWorker(action) {
  try {
    const response = yield call(getApi, action.payload);
    if (response.status === 200) {
      yield put(pushScrollSuccess(response.data));
    }
  } catch (error) {
    yield put(pushScrollError());
  }
}

function* addWorker(action) {
  try {
    const response = yield call(addApi, action.payload);
    if (response.status === 200) {
      yield put(addSuccess());
    }
  } catch (error) {
    yield put(addErrors());
  }
}

export function* pushScrollWatcher() {
  yield takeLatest("data/pushScrollData", pushScrollWorker);
}
export function* addWatcher() {
  yield takeLatest("data/addStart", addWorker);
}
