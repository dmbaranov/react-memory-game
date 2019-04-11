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

function getCardsForGame(amount: number) {
  const tempCards = [...CARDS];
  const result = [];

  for (let i = 0; i < amount; i++) {
    const index = Math.floor(Math.random() * tempCards.length);
    result.push(tempCards.splice(index, 1)[0]);
  }

  return result;
}

// TODO: improve it
// TODO: create a temp array with the amount of cells in it that is equal to fieldSettings.cellTypes
export function generateField(difficulty: GameDifficulty): ICard[] {
  // const amount = mapDifficultyToCells[difficulty].reduce(
  //   (a: number, b: number) => {
  //     console.log(a, b);
  //     return a * b;
  //   },
  //   1
  // );
  const fieldSettings = mapDifficultyToCells[difficulty];
  const gameCards = getCardsForGame(fieldSettings.cellTypes);
  const result: ICard[] = [];
  let cardIndex = Math.floor(Math.random() * gameCards.length);

  for (let i = 0; i < fieldSettings.amount / 2; i++) {
    result.push({ ...gameCards[cardIndex], id: i, solved: false });
    result.push({ ...gameCards[cardIndex], id: i + 1, solved: false });

    if (
      cardIndex === fieldSettings.cellTypes - 1 ||
      cardIndex > gameCards.length
    ) {
      cardIndex = 0;
    } else {
      cardIndex++;
    }
  }

  for (let i = 0; i < result.length; i++) {
    const newIndex = Math.floor(Math.random() * result.length);
    [result[i], result[newIndex]] = [result[newIndex], result[i]];
  }

  console.log(result);
  return result;
}
