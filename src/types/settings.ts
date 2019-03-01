export type GameDifficulty = 'easy' | 'medium' | 'hard';

export interface IGameSettings {
  name: string;
  difficulty: GameDifficulty;
}
