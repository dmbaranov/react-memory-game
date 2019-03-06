import { createSelector } from 'reselect';
import { AppState } from '../reducer';

const getGame = (state: AppState) => state.game;

const makeSelectGameData = () =>
  createSelector(
    getGame,
    game => game.gameData
  );

export { makeSelectGameData };
