import { IGameAction } from './actions';
import { GameConstants } from './constants';

export const initialState = {
  field: []
};

export type GameStore = Readonly<typeof initialState>;

export default function gameReducer(
  state: GameStore = initialState,
  action: IGameAction
) {
  switch (action.type) {
    case GameConstants.GENERATE_GAME_FIELD_SUCCESS:
      return {
        ...state,
        field: action.payload.field
      };

    default:
      return state;
  }
}
