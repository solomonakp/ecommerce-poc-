import {cartState, cartTypes} from "./cartTypes";

const initialState: cartState = {
  isOpen: false,
  products: [],
  updatingCart: false,
};

const cartReducer = (state = initialState, action: cartTypes) => {
  switch (action.type) {
    case "SET_CART_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "SET_UPDATING_CART":
      return {
        ...state,
        updatingCart: action.payload,
      };
    case "TOGGLE_OPEN":
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    default:
      return state;
  }
};

export default cartReducer;
