import React from 'react';
import { StyledCard } from './styles';
import { IProps } from './types';

const Card: React.FC<IProps> = ({
  onOpen,
  card,
  index,
  isOpened,
  isVisible
}) => {
  const handleCardOpen = () => {
    onOpen(index);
  };

  return (
    <StyledCard
      color={card.color}
      isVisible={isVisible}
      isOpened={isOpened}
      onClick={handleCardOpen}
    >
      {card.value} {card.id}
    </StyledCard>
  );
};

export default Card;
