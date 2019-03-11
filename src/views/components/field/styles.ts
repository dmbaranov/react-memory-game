import styled, { css } from 'styled-components';
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
  `};
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: calc(100% + 35px);
  width: 100%;
  text-align: center;
`;
