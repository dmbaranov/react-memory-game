import { GameConstants, GameConstantsType } from './constants';

export interface IGameAction {
  type: GameConstantsType;
  payload?: any;
}

export function executeGameOver(gameData: any): IGameAction {
  return {
    type: GameConstants.EXECUTE_GAME_OVER,
    payload: {
      gameData
    }
  };
}
