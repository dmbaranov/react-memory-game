import styled from 'styled-components';
import { mapDifficultyToCells } from './Field.component';
import { IGridProps } from './types';

export const FieldWrapper = styled.div`
  position: relative;
`;

export const Grid = styled.div`
  display: grid;

  grid-gap: 15px;
  grid-template-columns: repeat(
    ${(props: IGridProps) => mapDifficultyToCells[props.difficulty][0]},
    100px
  );
  grid-template-rows: repeat(
    ${(props: IGridProps) => mapDifficultyToCells[props.difficulty][1]},
    100px
  );
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: calc(100% + 35px);
  width: 100%;
  text-align: center;
`;
