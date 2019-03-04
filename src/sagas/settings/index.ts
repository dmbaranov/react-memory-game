import { takeLatest, put } from 'redux-saga/effects';
import { ISettingsAction } from '@/actions/settings';
import { SettingsConstants } from '@/constants/settings.constants';

export function* saveSettings(action: ISettingsAction) {
  const { ...settings } = action.payload;

  yield put({
    type: SettingsConstants.SAVE_SETTINGS_SUCCESS,
    payload: settings
  });
}

function* settingsSaga() {
  yield takeLatest<ISettingsAction>(
    SettingsConstants.SAVE_SETTINGS,
    saveSettings
  );
}

export default settingsSaga;
