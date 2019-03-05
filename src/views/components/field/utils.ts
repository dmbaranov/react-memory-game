import { GameDifficulty } from '@/core/settings/types';
import { ICard } from '@/core/game/types';
import { mapDifficultyToCells } from './Field.component';

const CARDS: ICard[] = [
  {
    color: 'red',
    value: 1
  },
  {
    color: 'blue',
    value: 2
  },
  {
    color: 'green',
    value: 3
  }
];

export function generateField(difficulty: GameDifficulty): ICard[] {
  const amount = mapDifficultyToCells[difficulty].reduce((a, b) => a * b, 1);
  const result = [];
  let cardIndex = 0;

  for (let i = 0; i < amount / 2; i++) {
    result.push(CARDS[cardIndex]);
    result.push(CARDS[cardIndex]);

    if (cardIndex === CARDS.length - 1) {
      cardIndex = 0;
    } else {
      cardIndex++;
    }
  }

  return result;
}
