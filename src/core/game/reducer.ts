import { IGameAction } from './actions';
import { GameConstants } from './constants';
import { IGameData } from './types';

export const initialState = {
  gameData: {} as IGameData,
  gameOver: false
};

export type GameStore = Readonly<typeof initialState>;

export default function gameReducer(
  state: GameStore = initialState,
  action: IGameAction
) {
  switch (action.type) {
    case GameConstants.EXECUTE_GAME_OVER_SUCCESS:
      return {
        ...state,
        gameData: { ...action.payload.gameData },
        gameOver: true
      };

    default:
      return state;
  }
}
