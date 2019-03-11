import React, { useState, useEffect, useRef } from 'react';
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
  const firstRender = useRef(true);
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

    if (firstRender.current) firstRender.current = false;

    onClick(index);

    setTimeout(() => {
      toggleShowFront(!showFront);
    }, 250);
  };

  const renderCard = () => {
    if (showFront) {
      return <Front color={card.color}>{card.value}</Front>;
    }
    return <Back>?</Back>;
  };

  return (
    <StyledCard
      data-testid="wrapper"
      color={card.color}
      isVisible={isVisible}
      isOpened={isOpened}
      index={index}
      firstRender={firstRender.current}
      onClick={handleCardOpen}
    >
      {renderCard()}
    </StyledCard>
  );
};

export default Card;
