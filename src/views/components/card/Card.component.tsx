import React from 'react';
import { IProps } from './types';

const Card: React.FC<IProps> = ({ onOpen, card }) => {
  const handleCardOpen = () => {
    onOpen(card);
  };

  return (
    <div style={{ background: card.color }} onClick={handleCardOpen}>
      C, {card.value}
    </div>
  );
};

export default Card;
