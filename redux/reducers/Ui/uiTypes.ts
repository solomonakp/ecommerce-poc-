export const TOGGLE_LOADING = 'TOGGLE_LOADING';
export const TOGGLE_DARK = 'TOGGLE_DARK';
export const TOGGLE_OPEN = 'TOGGLE_OPEN';

interface ToggleLoadingAction {
  type: typeof TOGGLE_LOADING;
  payload?: undefined;
}

interface ToggleDarkAction {
  type: typeof TOGGLE_DARK;
  payload?: undefined;
}
interface ToggleOpenAction {
  type: typeof TOGGLE_OPEN;
  payload?: undefined;
}

export interface UiState {
  isLoading: boolean;
  isDark: boolean;
  isOpen: boolean;
}

export type UiActionTypes =
  | ToggleDarkAction
  | ToggleLoadingAction
  | ToggleOpenAction;
