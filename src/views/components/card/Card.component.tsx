import React, { useState, useEffect } from 'react';
import { StyledCard, Front, Back } from './styles';
// import { Container, Back, Card as Wtf, Face } from './styles';
import { IProps } from './types';

const Card: React.FC<IProps> = ({
  onClick,
  card,
  index,
  isOpened,
  isVisible
}) => {
  const [opened, toggleOpened] = useState(false);

  useEffect(
    () => {
      setTimeout(() => {
        toggleOpened(isOpened);
      }, 250);
    },
    [isOpened]
  );

  const handleCardOpen = () => {
    onClick(index);

    setTimeout(() => {
      toggleOpened(!opened);
    }, 250);
  };

  // return (
  //   <Container>
  //     <Wtf>{isOpened ? <Face /> : <Back />}</Wtf>
  //   </Container>
  // );
  return (
    <StyledCard
      color={card.color}
      isVisible={isVisible}
      isOpened={isOpened}
      onClick={handleCardOpen}
    >
      {opened ? <Front color={card.color}>{card.value}</Front> : <Back>?</Back>}
    </StyledCard>
  );
};

export default Card;
