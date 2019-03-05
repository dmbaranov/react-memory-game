import React, { useState } from 'react';
import { ICard } from '@/core/game/types';
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

  const openCard = (card: ICard) => {
    console.log('Opened card', card);
  };

  const renderCells = () => {
    const result = [];

    for (let i = 0; i < field.length; i++) {
      result.push(<Card onOpen={openCard} card={field[i]} key={i} />);
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
