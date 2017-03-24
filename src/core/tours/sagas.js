import { LOCATION_CHANGE } from 'react-router-redux';
import { eventChannel } from 'redux-saga';
import { call, cancel, fork, put, take } from 'redux-saga/effects';
import { tourList } from './tour-list';
import { tourActions } from 'core/tours';

function subscribe() {
  return eventChannel(emit => tourList.subscribe(emit));
}

function* read() {
  const channel = yield call(subscribe);
  let action = yield take(channel);
  yield put(action);
}

function* watchLoadTours() {
  try {
    tourList.path = 'tours';
    const job = yield fork(read);
    yield take([tourActions.LOAD_TOURS_FULFILLED]);
    yield cancel(job);
  }
  catch (error) {
    yield put(tourActions.loadFailed(error));
  }
}

function* watchLocationChange() {
  let ok = true;
  while (ok) {
    ok = true;
    let { payload } = yield take(LOCATION_CHANGE);
    if (payload.pathname === '/') {
      yield put(tourActions.queryTours(payload.query));
    }
  }
}

//=====================================
//  TOUR SAGAS
//-------------------------------------
export const tourSagas = [
  fork(watchLoadTours),
  fork(watchLocationChange)
];
