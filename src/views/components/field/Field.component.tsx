import React, { useState, useEffect } from 'react';
import Card from '@/views/components/card';
import { Grid } from './styles';
import { IProps } from './types';
import { generateField } from './utils';

export const mapDifficultyToCells = {
  easy: [4, 3],
  medium: [5, 4],
  hard: [6, 5]
};

const Field: React.FC<IProps> = ({ difficulty }) => {
  const createField = () => {
    return generateField(difficulty);
  };
  const [field, updateField] = useState(createField);
  const [openedCards, updateOpenedCards] = useState([] as number[]);

  useEffect(
    () => {
      if (openedCards.length === 2) {
        const [a, b] = openedCards;
        if (field[a].value === field[b].value) {
          const updatedField = [...field];
          updatedField[a].solved = true;
          updatedField[b].solved = true;
          updateField(updatedField);
        }

        updateOpenedCards([]);
      }
    },
    [openedCards]
  );

  const openCard = (index: number) => {
    updateOpenedCards([...openedCards, index]);
  };

  const renderCells = () => {
    const result = [];

    for (let i = 0; i < field.length; i++) {
      result.push(
        <Card
          index={i}
          isOpened={openedCards.includes(i)}
          isVisible={!Boolean(field[i].solved)}
          onOpen={openCard}
          card={field[i]}
          key={i}
        />
      );
    }

    return result;
  };

  return (
    <>
      <Grid difficulty={difficulty}>{renderCells()}</Grid>
    </>
  );
};

export default Field;
