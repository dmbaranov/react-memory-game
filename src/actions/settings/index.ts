import {
  SettingsConstants,
  SettingsConstantsType
} from '@/constants/settings.constants';
import { IGameSettings } from '@/types/settings';

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
