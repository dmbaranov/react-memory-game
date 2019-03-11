import styled, { css, keyframes } from 'styled-components';
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

const firstRenderAnimation = keyframes`
  0% {
    transform: rotateY(-300deg);
    opacity: 0;
  }
  
  50% {
    opacity: 1;
  }
  
  100% {
    transform: rotateY(0deg);
    opacity: 1;
  }
`;

const getStyleCardAnimation = (props: IStyledCardProps) => {
  if (props.firstRender)
    return css`${firstRenderAnimation} 1s forwards ${props.index / 8}s`;

  if (!props.isVisible)
    return css`
      ${fadeOutAnimation} 1s forwards
    `;

  if (props.isOpened) {
    return css`
      ${closeAnimation} 1s forwards
    `;
  } else {
    return css`
      ${openAnimation} 1s forwards
    `;
  }
};

export const StyledCard = styled.div`
  ${(props: IStyledCardProps) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    animation: ${getStyleCardAnimation(props)};

    opacity: ${props.firstRender ? 0 : 1};
  `}
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
    animation: ${backgroundPulse} 1s forwards infinite linear;
  }
`;

export const Front = styled(CardContent)`
  background: ${(props: any) => props.color};
`;
