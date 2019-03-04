import { SettingsConstants } from '../constants';
import { GameDifficulty } from '../types';
import { saveSettings } from '../actions';

describe('Settings actions tests', () => {
  it('Should create correct action to save settings ', () => {
    const settings = {
      name: 'Andrew',
      difficulty: 'hard' as GameDifficulty
    };
    const expectedAction = {
      type: SettingsConstants.SAVE_SETTINGS,
      payload: settings
    };

    expect(saveSettings(settings)).toEqual(expectedAction);
  });
});
