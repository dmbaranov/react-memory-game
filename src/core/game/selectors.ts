import { createSelector } from 'reselect';
import { AppState } from '../reducer';

const getGame = (state: AppState) => state.game;

const makeSelectGameData = () =>
  createSelector(
    getGame,
    game => game.gameData
  );

const makeSelectGameOver = () =>
  createSelector(
    getGame,
    game => game.gameOver
  );

export { makeSelectGameData, makeSelectGameOver };
