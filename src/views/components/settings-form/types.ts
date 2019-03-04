import { IGameSettings } from '@/core/settings/types';

export interface ISettingsFormComponentProps {
  onSubmit: (settings: IGameSettings) => void;
}
