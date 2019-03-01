const initialState = {
  hello: 'world'
};

export type SettingsStore = Readonly<typeof initialState>;

export default function settingsReducer(
  state: SettingsStore = initialState,
  action: any
) {
  switch (action.type) {
    default:
      return state;
  }
}
