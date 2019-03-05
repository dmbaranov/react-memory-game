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

// TODO: improve it
export function generateField(difficulty: GameDifficulty): ICard[] {
  const amount = mapDifficultyToCells[difficulty].reduce((a, b) => a * b, 1);
  const result: ICard[] = [];
  let cardIndex = 0;

  for (let i = 0; i < amount / 2; i++) {
    result.push({ ...CARDS[cardIndex], id: i });
    result.push({ ...CARDS[cardIndex], id: i + 1 });

    if (cardIndex === CARDS.length - 1) {
      cardIndex = 0;
    } else {
      cardIndex++;
    }
  }

  for (let i = 0; i < result.length; i++) {
    const newIndex = Math.floor(Math.random() * result.length);
    [result[i], result[newIndex]] = [result[newIndex], result[i]];
  }

  return result;
}
