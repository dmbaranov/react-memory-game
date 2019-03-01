import { all } from 'redux-saga/effects';
import settingsSaga from './settings.saga';

export default function* rootSaga() {
  yield all([settingsSaga()]);
}
