import { IGameAction } from './actions';
import { GameConstants } from './constants';

export const initialState = {
  gameData: {}
};

export type GameStore = Readonly<typeof initialState>;

export default function gameReducer(
  state: GameStore = initialState,
  action: IGameAction
) {
  switch (action.type) {
    case GameConstants.EXECUTE_GAME_OVER_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        gameData: { ...action.payload.gameData }
      };

    default:
      return state;
  }
}
