import {
  ProductsTypes,
  productsState,
  SET_LOADING,
  TOGGLE_OPEN,
  SET_FEATURED_PRODUCT,
  SET_PRODUCTS,
} from "./productsTypes";

const initialState: productsState = {
  isLoading: false,

  featuredProduct: null,
  products: [],
};

const productsReducer = (state = initialState, action: ProductsTypes) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };

    case SET_FEATURED_PRODUCT:
      return {
        ...state,
        featuredProduct: action.payload,
      };
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};

export default productsReducer;
