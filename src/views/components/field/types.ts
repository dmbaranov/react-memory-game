import { GameDifficulty } from '@/core/settings/types';

export interface IProps {
  difficulty: GameDifficulty;
  onGameOver: (gameData: any) => void;
  onGameStarted: (time: number) => void;
}

export interface IGridProps {
  difficulty: GameDifficulty;
}
