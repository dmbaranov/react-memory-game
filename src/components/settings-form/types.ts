import { IGameSettings } from '@/types/settings';

export interface ISettingsFormComponentProps {
  onSubmit: (settings: IGameSettings) => void;
}
