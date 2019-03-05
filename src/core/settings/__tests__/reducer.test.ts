import { SettingsConstants } from '../constants';
import reducer from '../reducer';

describe('Settings reducer', () => {
  it('Should return initial state', () => {
    expect(reducer(undefined, {} as any)).toEqual({
      name: '',
      difficulty: 'hard'
    });
  });

  it('Should save settings', () => {
    expect(
      reducer(undefined, {
        type: SettingsConstants.SAVE_SETTINGS_SUCCESS,
        payload: {
          name: 'Andrew',
          difficulty: 'hard'
        }
      })
    ).toEqual({
      name: 'Andrew',
      difficulty: 'hard'
    });
  });
});
