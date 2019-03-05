import { createSelector } from 'reselect';
import { AppState } from '../reducer';

const getGame = (state: AppState) => state.game;

const makeSelectGameField = () =>
  createSelector(
    getGame,
    game => game.field
  );

export { makeSelectGameField };
