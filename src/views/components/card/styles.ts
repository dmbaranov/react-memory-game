import styled from 'styled-components';
import { IStyledCardProps } from './types';

export const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  visibility: ${(props: IStyledCardProps) =>
    props.isVisible ? 'visible' : 'hidden'};
  background: ${(props: IStyledCardProps) =>
    props.isOpened ? props.color : 'gray'};
`;
