import { expectSaga } from 'redux-saga-test-plan';
import settingsReducer from '@/reducers/settings';
import { SettingsConstants } from '@/constants/settings.constants';
import { saveSettings } from '../index';

describe('Settings saga tests', () => {
  it('Should save settings successfully', async () => {
    const action = {
      type: SettingsConstants.SAVE_SETTINGS,
      payload: {
        name: 'Andrew',
        difficulty: 'hard'
      }
    };

    await expectSaga(saveSettings, action)
      .withReducer(settingsReducer)
      .hasFinalState({
        name: 'Andrew',
        difficulty: 'hard'
      })
      .run();
  });
});
