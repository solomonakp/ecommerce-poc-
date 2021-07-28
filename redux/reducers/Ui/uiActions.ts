import {
  UiActionTypes,
  TOGGLE_DARK,
  TOGGLE_LOADING,
  TOGGLE_OPEN,
} from './uiTypes';
export const toggleDark = (): UiActionTypes => {
  return {
    type: TOGGLE_DARK,
  };
};

export const toggleLoading = (): UiActionTypes => {
  return {
    type: TOGGLE_LOADING,
  };
};

export const toggleOpen = (): UiActionTypes => {
  return {
    type: TOGGLE_OPEN,
  };
};
