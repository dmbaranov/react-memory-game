import { IGameSettings } from '@/core/settings/types';

export interface IProps {
  onSubmit: (settings: IGameSettings) => void;
}
