import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { mapDifficultyToCells } from './Field.component';
import { IGridProps } from './types';

export const FieldWrapper = styled.div`
  position: relative;
`;

export const Grid = styled.div`
  ${(props: IGridProps) => css`
    display: grid;

    grid-gap: 15px;
    grid-template-columns: repeat(
      ${mapDifficultyToCells[props.difficulty][0]},
      100px
    );
    grid-template-rows: repeat(
      ${mapDifficultyToCells[props.difficulty][1]},
      100px
    );

    ${media.lessThan('medium')`
      grid-template-columns: repeat(${
        mapDifficultyToCells[props.difficulty + 'Mobile'][0]
      }, 75px);
      grid-template-rows: repeat(${
        mapDifficultyToCells[props.difficulty + 'Mobile'][1]
      }, 75px);
    `}
  `};
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: calc(100% + 35px);
  ${media.between('small', 'medium')`top: calc(100% + 75px);`}
  width: 100%;
  text-align: center;
`;
