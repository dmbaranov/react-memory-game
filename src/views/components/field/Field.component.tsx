import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@/views/components/card';
import { FieldWrapper, Grid, ButtonWrapper } from './styles';
import { IProps } from './types';
import { generateField } from './utils';

// Product of 2 numbers should always be the same
export const mapDifficultyToCells: any = {
  easy: {
    mobile: [4, 3],
    desktop: [4, 3],
    amount: 12,
    cellTypes: 6
  },
  medium: {
    mobile: [4, 4],
    desktop: [4, 4],
    amount: 16,
    cellTypes: 10
  },
  hard: {
    mobile: [4, 5],
    desktop: [5, 4],
    amount: 20,
    cellTypes: 14
  }
};

// Toggle cards, etc.
const ACTION_TIMEOUT = 750;

const Field: React.FC<IProps> = ({ difficulty, onGameStarted, onGameOver }) => {
  const createField = () => {
    const field = generateField(difficulty).map((card: any) => ({
      ...card,
      solved: true
    }));
    const now = new Date().getTime();
    onGameStarted(now);

    return field;
  };
  const [isBusy, setIsBusy] = useState(false); // If card opening is in progress
  const [field, updateField] = useState(createField);
  const [openedCards, updateOpenedCards] = useState([] as number[]);
  const [moves, increaseMoves] = useState(0);

  useEffect(
    () => {
      handleOpenedCards();
    },
    [openedCards]
  );

  useEffect(
    () => {
      checkForGameOver();
    },
    [field]
  );

  const toggleCard = (index: number) => {
    if (isBusy) {
      return;
    }

    if (!openedCards.includes(index)) {
      updateOpenedCards([...openedCards, index]);
    } else {
      // Same card was clicked again, so we remove it
      updateOpenedCards([...openedCards].filter(item => item !== index));
    }
  };

  const checkForGameOver = () => {
    const remainingCards = field.filter(card => !card.solved);

    if (remainingCards.length === 0) {
      onGameOver({
        moves
      });
    }
  };

  const handleOpenedCards = () => {
    if (openedCards.length === 2) {
      setIsBusy(true);

      const [a, b] = openedCards;
      if (field[a].value === field[b].value) {
        // This will copy only first layer of cell objects, but it will do because there're no nested objects
        const newField = field.map((cell: any) => ({ ...cell }));
        newField[a].solved = true;
        newField[b].solved = true;

        setTimeout(() => {
          updateField(newField);
        }, ACTION_TIMEOUT);
      }

      increaseMoves(moves + 1);
      setTimeout(() => {
        updateOpenedCards([]);
        setIsBusy(false);
      }, ACTION_TIMEOUT);
    }
  };

  const startNewGame = () => {
    // TODO: fix this.. Idk, you have to come up with something as this is ugly and might cause performance issues
    const now = new Date().getTime();
    const newField = generateField(difficulty);

    updateField([]);
    updateOpenedCards([]);
    setTimeout(() => {
      setIsBusy(false);
      updateField(newField);
      increaseMoves(0);
      onGameStarted(now);
    }, ACTION_TIMEOUT);
  };

  const renderCells = () => {
    const result = [];

    for (let i = 0; i < field.length; i++) {
      result.push(
        <Card
          index={i}
          isOpened={field[i].solved || openedCards.includes(i)}
          isVisible={!Boolean(field[i].solved)}
          onClick={toggleCard}
          card={field[i]}
          isBusy={isBusy}
          key={i}
        />
      );
    }

    return result;
  };

  return (
    <>
      <FieldWrapper>
        <Grid difficulty={difficulty}>{renderCells()}</Grid>
        <ButtonWrapper>
          <Button variant="contained" color="primary" onClick={startNewGame}>
            New game
          </Button>
        </ButtonWrapper>
      </FieldWrapper>
    </>
  );
};

export default Field;
