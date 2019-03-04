import { expectSaga } from 'redux-saga-test-plan';
import settingsReducer from '../reducer';
import { SettingsConstants } from '../constants';
import { saveSettings } from '../sagas';

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
