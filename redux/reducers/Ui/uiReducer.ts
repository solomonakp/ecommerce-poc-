import {
  UiActionTypes,
  UiState,
  TOGGLE_LOADING,
  TOGGLE_DARK,
  TOGGLE_OPEN,
} from './uiTypes';
const initialState: UiState = {
  isLoading: false,
  isDark: false,
  isOpen: false,
};

const uiReducer = (state = initialState, action: UiActionTypes) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case TOGGLE_DARK:
      return {
        ...state,
        isDark: !state.isDark,
      };

    case TOGGLE_OPEN:
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    default:
      return state;
  }
};

export default uiReducer;
