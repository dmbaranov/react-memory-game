import { combineReducers } from 'redux';
import settings, { SettingsStore } from './settings';

export interface AppState {
  settings: SettingsStore;
}

const appReducer = combineReducers<AppState>({
  settings
});

export default appReducer;
