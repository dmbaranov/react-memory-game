import { takeLatest, put } from 'redux-saga/effects';
import { IGameAction } from './actions';
import { GameConstants } from './constants';

export function* executeGameOver(action: IGameAction) {
  const { gameData } = action.payload;

  yield put({
    type: GameConstants.EXECUTE_GAME_OVER_SUCCESS,
    payload: {
      gameData
    }
  });
}

function* gameSaga() {
  yield takeLatest<IGameAction>(
    GameConstants.EXECUTE_GAME_OVER,
    executeGameOver
  );
}

export default gameSaga;
