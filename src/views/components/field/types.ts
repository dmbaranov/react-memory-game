import { GameDifficulty } from '@/core/settings/types';

export interface IFieldGameData {
  moves: number;
}

export interface IProps {
  difficulty: GameDifficulty;
  onGameOver: (gameData: IFieldGameData) => void;
  onGameStarted: (time: number) => void;
}

export interface IGridProps {
  difficulty: GameDifficulty;
}
