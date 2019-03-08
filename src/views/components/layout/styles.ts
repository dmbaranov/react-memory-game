import styled from 'styled-components';
import { ILayoutComponentProps } from './types';

export const LayoutStyles = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;

  background: #eeeeee;
`;

export const ContentBox: any = styled.div`
  padding-left: ${(props: ILayoutComponentProps) =>
    (props.vPadding || '50') + 'px'};
  padding-right: ${(props: ILayoutComponentProps) =>
    (props.vPadding || '50') + 'px'};

  padding-top: ${(props: ILayoutComponentProps) =>
    (props.hPadding || '50') + 'px'};
  padding-bottom: ${(props: ILayoutComponentProps) =>
    (props.hPadding || '50') + 'px'};

  display: flex;
  justify-content: ${(props: ILayoutComponentProps) =>
    props.justifyContent || 'center'};
  align-items: ${(props: ILayoutComponentProps) =>
    props.alignItems || 'center'};
  align-content: ${(props: ILayoutComponentProps) =>
    props.alignContent || 'normal'};
  flex-direction: ${(props: ILayoutComponentProps) => props.direction || 'row'};
  flex-wrap: wrap;

  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;
