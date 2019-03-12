import styled, { css } from 'styled-components';
import media from 'styled-media-query';
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
  ${(props: ILayoutComponentProps) => css`
    ${media.lessThan('small')`padding: 15px;`}
    ${media.between('small', 'medium')`padding: 50px;`}
    padding: 100px;

    display: flex;
    justify-content: ${props.justifyContent || 'center'};
    align-items: ${props.alignItems || 'center'};
    align-content: ${props.alignContent || 'normal'};
    flex-direction: ${props.direction || 'row'};
    flex-wrap: wrap;

    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  `}
`;
