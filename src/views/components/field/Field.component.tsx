import React from 'react';
import Card from '@/views/components/card';
import { Grid } from './styles';
import { IProps } from './types';

export const mapDifficultyToCells = {
  easy: [4, 3],
  medium: [5, 4],
  hard: [6, 5]
};

const Field: React.FC<IProps> = ({ difficulty }) => {
  function renderCells() {
    const result = [];
    const amount = mapDifficultyToCells[difficulty].reduce((a, b) => a * b, 1);

    for (let i = 0; i < amount; i++) {
      result.push(<Card />);
    }

    return result;
  }

  return (
    <>
      <Grid difficulty={difficulty}>{renderCells()}</Grid>
    </>
  );
};

export default Field;
