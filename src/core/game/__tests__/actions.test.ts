import { executeGameOver } from '../actions';
import { GameConstants } from '../constants';

describe('Game actions tests', () => {
  it('Should create correct action to execute game over', () => {
    const gameData = {
      playTime: 5,
      moves: 5
    };

    const expectedAction = {
      type: GameConstants.EXECUTE_GAME_OVER,
      payload: {
        gameData
      }
    };

    expect(executeGameOver(gameData)).toEqual(expectedAction);
  });
});
