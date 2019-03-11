import { ICard } from '@/core/game/types';

export interface IProps {
  card: ICard;
  index: number;
  onClick: (index: number) => void;
  isOpened: boolean;
  isVisible: boolean;
  isBusy: boolean;
}

export interface IStyledCardProps {
  color: string;
  isOpened: boolean;
  isVisible: boolean;
  firstRender: boolean;
  index: number;
}
