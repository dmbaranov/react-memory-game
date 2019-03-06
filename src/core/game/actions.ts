import { GameConstants, GameConstantsType } from './constants';
import { IGameData } from './types';

export interface IGameAction {
  type: GameConstantsType;
  payload?: any;
}

export function executeGameOver(gameData: IGameData): IGameAction {
  return {
    type: GameConstants.EXECUTE_GAME_OVER,
    payload: {
      gameData
    }
  };
}
