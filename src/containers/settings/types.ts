import { IGameSettings } from '@/types/settings';

export interface ISettingsProps {
  saveSettings: (settings: IGameSettings) => void;
}
