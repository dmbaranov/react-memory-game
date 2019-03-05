import { all } from 'redux-saga/effects';
import settingsSaga from './settings/sagas';
import gameSaga from './game/sagas';

export default function* rootSaga() {
  yield all([settingsSaga(), gameSaga()]);
}
