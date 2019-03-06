import { IGameSettings } from '@/core/settings/types';

export interface IProps {
  settings: IGameSettings;
  executeGameOver: (gameData: any) => void;
}

export interface IState {
  startTime: number;
}
