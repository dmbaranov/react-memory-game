import { SettingsConstants } from '@/constants/settings.constants';
import { GameDifficulty } from '@/types/settings';
import { saveSettings } from '..';

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
