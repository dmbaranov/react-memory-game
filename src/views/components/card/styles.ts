import styled, { keyframes } from 'styled-components';
import { IStyledCardProps } from './types';

const pulse = keyframes`
  0% {
    transform: rotate(0);
  } 
  
  33% {
    transform: rotate(-5deg);
  }

  66% {
  transform: rotate(5deg);
  }
  
  100% {
  transform: rotate(0);
  }
`;

const openAnimation = keyframes`
  0% {
    transform: rotateY(0deg);
  }
 
  
  100% {
    transform: rotateY(180deg);
  }
`;

const closeAnimation = keyframes`  
  0% {
    transform: rotateY(180deg);
  }
  
  100% {
    transform: rotateY(0deg);
  }
`;

export const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  visibility: ${(props: IStyledCardProps) =>
    props.isVisible ? 'visible' : 'hidden'};
  animation: ${(props: IStyledCardProps) =>
      props.isOpened ? closeAnimation : openAnimation}
    1s forwards;
`;

const CardContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
`;

export const Back = styled(CardContent)`
  background: #eeeeee;

  &:hover {
    animation: ${pulse} 1s forwards infinite linear;
  }
`;

export const Front = styled(CardContent)`
  background: ${(props: any) => props.color};
`;
