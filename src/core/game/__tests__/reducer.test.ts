import { GameConstants } from '../constants';
import reducer from '../reducer';

describe('Game reducer', () => {
  it('Should return initial state', () => {
    expect(reducer(undefined, {} as any)).toEqual({
      gameData: {}
    });
  });

  it('Should save settings', () => {
    expect(
      reducer(undefined, {
        type: GameConstants.EXECUTE_GAME_OVER_SUCCESS,
        payload: {
          gameData: {
            playTime: 5,
            moves: 5
          }
        }
      })
    ).toEqual({
      gameData: {
        playTime: 5,
        moves: 5
      }
    });
  });
});
