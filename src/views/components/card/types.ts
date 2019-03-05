import { ICard } from '@/core/game/types';

export interface IProps {
  card: ICard;
  onOpen: (card: ICard) => void;
}
