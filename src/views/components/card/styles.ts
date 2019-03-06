import styled, { keyframes } from 'styled-components';
import { IStyledCardProps } from './types';

const backgroundPulse = keyframes`
  0% {
  background: #f5f5f5;
  }
  
  50% {
  background: #e0e0e0;
  }
  
  100% {
  background: #f5f5f5;
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

const fadeOutAnimation = keyframes`
  0% {
    opacity: 1;
  }
  
  100% {
  opacity: 0;
  }
`;

export const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  animation: ${(props: IStyledCardProps) =>
        props.isVisible ? 'none' : fadeOutAnimation}
      1s forwards,
    ${(props: IStyledCardProps) =>
        props.isOpened ? closeAnimation : openAnimation}
      1s forwards;
`;

// visibility: ${(props: IStyledCardProps) =>
//   props.isVisible ? 'visible' : 'hidden'};
// animation: ${(props: IStyledCardProps) =>
//     props.isOpened ? closeAnimation : openAnimation}
//   1s forwards;

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
    animation: ${backgroundPulse} 1s forwards infinite linear;
  }
`;

export const Front = styled(CardContent)`
  background: ${(props: any) => props.color};
`;
