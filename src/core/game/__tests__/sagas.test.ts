import { expectSaga } from 'redux-saga-test-plan';
import settingsReducer from '../reducer';
import { GameConstants } from '../constants';
import { executeGameOver } from '../sagas';

describe('Game saga tests', () => {
  it('Should execute gameover successfully', async () => {
    const action = {
      type: GameConstants.EXECUTE_GAME_OVER,
      payload: {
        gameData: {
          playTime: 5,
          moves: 5
        }
      }
    };

    await expectSaga(executeGameOver, action)
      .withReducer(settingsReducer)
      .hasFinalState({
        gameData: {
          playTime: 5,
          moves: 5
        },
        gameOver: true
      })
      .run();
  });
});
