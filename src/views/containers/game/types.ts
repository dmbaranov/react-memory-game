import { IGameSettings } from '@/core/settings/types';
import { IGameData } from '@/core/game/types';

export interface IProps {
  settings: IGameSettings;
  executeGameOver: (gameData: IGameData) => void;
  gameOver: boolean;
}

export interface IState {
  startTime: number;
}
