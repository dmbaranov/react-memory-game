import { IGameSettings } from '@/core/settings/types';
import { IGameData } from '@/core/game/types';

export interface IProps {
  settings: IGameSettings;
  gameData: IGameData;
  gameOver: boolean;
}
