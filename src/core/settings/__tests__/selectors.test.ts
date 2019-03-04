import { makeSelectSettings } from '../selectors';

describe('Settings selector tests', () => {
  it('Should return correct settings', () => {
    const state = {
      settings: {
        name: 'Andrew',
        difficulty: 'hard'
      }
    };

    const expectedSettings = {
      name: 'Andrew',
      difficulty: 'hard'
    };

    const selector = makeSelectSettings();

    expect(selector(state)).toEqual(expectedSettings);
  });
});
