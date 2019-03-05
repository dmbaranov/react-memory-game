import { GameConstants, GameConstantsType } from './constants';

export interface IGameAction {
  type: GameConstantsType;
  payload?: any;
}

export function generateField(): IGameAction {
  return {
    type: GameConstants.GENERATE_GAME_FIELD
  };
}
