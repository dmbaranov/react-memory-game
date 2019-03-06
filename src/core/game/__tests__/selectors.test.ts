import { makeSelectGameData } from '../selectors';

describe('Game selector tests', () => {
  it('Should return correct settings', () => {
    const state = {
      game: {
        gameData: {
          playTime: 5,
          moves: 5
        }
      }
    };

    const expectedSettings = {
      playTime: 5,
      moves: 5
    };

    const selector = makeSelectGameData();

    expect(selector(state)).toEqual(expectedSettings);
  });
});
