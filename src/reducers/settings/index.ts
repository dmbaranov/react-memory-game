import { ISettingsAction } from '@/actions/settings';
import { SettingsConstants } from '@/constants/settings.constants';

const initialState = {
  name: '',
  difficulty: ''
};

export type SettingsStore = Readonly<typeof initialState>;

export default function settingsReducer(
  state: SettingsStore = initialState,
  action: ISettingsAction
) {
  switch (action.type) {
    case SettingsConstants.SAVE_SETTINGS_SUCCESS:
      return {
        ...state,
        name: action.payload.name,
        difficulty: action.payload.difficulty
      };

    default:
      return state;
  }
}
