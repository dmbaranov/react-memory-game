export interface ICard {
  value: number;
  color: string;
  id?: number;
  solved?: boolean;
}

export interface IGameData {
  playTime: number;
  moves: number;
}
