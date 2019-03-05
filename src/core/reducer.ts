import { combineReducers } from 'redux';
import settings, { SettingsStore } from './settings/reducer';
import game, { GameStore } from './game/reducer';

export interface AppState {
  settings: SettingsStore;
  game: GameStore;
}

const appReducer = combineReducers<AppState>({
  settings,
  game
});

export default appReducer;
