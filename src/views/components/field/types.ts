import { GameDifficulty } from '@/core/settings/types';

export interface IProps {
  difficulty: GameDifficulty;
  onGameOver: () => void;
}

export interface IGridProps {
  difficulty: GameDifficulty;
}
