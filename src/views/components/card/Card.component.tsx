import React, { useState, useEffect } from 'react';
import { StyledCard, Front, Back } from './styles';
import { IProps } from './types';

const Card: React.FC<IProps> = ({
  onClick,
  card,
  index,
  isOpened,
  isVisible,
  isBusy
}) => {
  const [showFront, toggleShowFront] = useState(false);

  useEffect(
    () => {
      setTimeout(() => {
        toggleShowFront(isOpened);
      }, 250);
    },
    [isOpened]
  );

  const handleCardOpen = () => {
    if (isBusy) {
      return;
    }

    onClick(index);

    setTimeout(() => {
      toggleShowFront(!showFront);
    }, 250);
  };

  const displayContent = () => {
    if (showFront) {
      return <Front color={card.color}>{card.value}</Front>;
    }
    return <Back>?</Back>;
  };

  return (
    <StyledCard
      color={card.color}
      isVisible={isVisible}
      isOpened={isOpened}
      onClick={handleCardOpen}
    >
      {displayContent()}
    </StyledCard>
  );
};

export default Card;
