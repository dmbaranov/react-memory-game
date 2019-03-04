import { SettingsConstants, SettingsConstantsType } from './constants';
import { IGameSettings } from './types';

export interface ISettingsAction {
  type: SettingsConstantsType;
  payload?: any;
}

export function saveSettings(settings: IGameSettings): ISettingsAction {
  return {
    type: SettingsConstants.SAVE_SETTINGS,
    payload: settings
  };
}
