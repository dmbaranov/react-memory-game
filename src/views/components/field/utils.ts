import { GameDifficulty } from '@/core/settings/types';
import { ICard } from '@/core/game/types';
import { mapDifficultyToCells } from './Field.component';

const CARDS: ICard[] = [
  {
    color: '#e53935',
    value: 1
  },
  {
    color: '#1e88e5',
    value: 2
  },
  {
    color: '#43a047',
    value: 3
  },
  {
    color: '#8e24aa',
    value: 4
  },
  {
    color: '#00acc1',
    value: 5
  },
  {
    color: '#00897b',
    value: 6
  },
  {
    color: '#43a047',
    value: 7
  },
  {
    color: '#fdd835',
    value: 8
  },
  {
    color: '#d81b60',
    value: 9
  },
  {
    color: '#fb8c00',
    value: 10
  },
  {
    color: '#f4511e',
    value: 11
  },
  {
    color: '#6d4c41',
    value: 12
  },
  {
    color: '#757575',
    value: 13
  },
  {
    color: '#546e7a',
    value: 14
  }
];

// TODO: improve it
export function generateField(difficulty: GameDifficulty): ICard[] {
  // const amount = mapDifficultyToCells[difficulty].reduce(
  //   (a: number, b: number) => {
  //     console.log(a, b);
  //     return a * b;
  //   },
  //   1
  // );
  const fieldSettings = mapDifficultyToCells[difficulty];
  const result: ICard[] = [];
  let cardIndex = Math.floor(Math.random() * CARDS.length);

  for (let i = 0; i < fieldSettings.amount / 2; i++) {
    result.push({ ...CARDS[cardIndex], id: i });
    result.push({ ...CARDS[cardIndex], id: i + 1 });

    if (cardIndex === fieldSettings.cellTypes - 1) {
      cardIndex = 0;
    } else {
      cardIndex++;
    }
  }

  // for (let i = 0; i < result.length; i++) {
  //   const newIndex = Math.floor(Math.random() * result.length);
  //   [result[i], result[newIndex]] = [result[newIndex], result[i]];
  // }

  console.log(result);

  return result;
}
