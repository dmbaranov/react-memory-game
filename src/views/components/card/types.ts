import { ICard } from '@/core/game/types';

export interface IProps {
  card: ICard;
  index: number;
  onOpen: (index: number) => void;
  isOpened: boolean;
  isVisible: boolean;
}

export interface IStyledCardProps {
  color: string;
  isOpened: boolean;
  isVisible: boolean;
}
