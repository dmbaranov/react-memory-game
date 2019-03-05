import { takeLatest, put } from 'redux-saga/effects';
import { IGameAction } from './actions';
import { GameConstants } from './constants';

export function* generateField() {
  const field: any[] = [1, 2, 3];

  yield put({
    type: GameConstants.GENERATE_GAME_FIELD_SUCCESS,
    payload: {
      field
    }
  });
}

function* gameSaga() {
  yield takeLatest<IGameAction>(
    GameConstants.GENERATE_GAME_FIELD,
    generateField
  );
}

export default gameSaga;
