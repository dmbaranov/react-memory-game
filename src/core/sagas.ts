import { all } from 'redux-saga/effects';
import settingsSaga from './settings/sagas';

export default function* rootSaga() {
  yield all([settingsSaga()]);
}
