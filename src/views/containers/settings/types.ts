import { IGameSettings } from '@/core/settings/types';

export interface ISettingsProps {
  saveSettings: (settings: IGameSettings) => void;
}
