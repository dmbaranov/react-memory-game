import { createSelector } from 'reselect';
import { AppState } from '@/reducers';

const getSettings = (state: AppState) => state.settings;

const makeSelectSettings = () =>
  createSelector(
    getSettings,
    settings => settings
  );

export { makeSelectSettings };
