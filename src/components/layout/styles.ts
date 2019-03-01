import styled from 'styled-components';
import { ILayoutComponentProps } from './types';

export const LayoutStyles = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: ${(props: ILayoutComponentProps) =>
    props.justifyContent || 'center'};
  align-items: ${(props: ILayoutComponentProps) =>
    props.alignItems || 'center'};
  flex-wrap: wrap;
`;
