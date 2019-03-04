import { combineReducers } from 'redux';
import settings, { SettingsStore } from './settings/reducer';

export interface AppState {
  settings: SettingsStore;
}

const appReducer = combineReducers<AppState>({
  settings
});

export default appReducer;
