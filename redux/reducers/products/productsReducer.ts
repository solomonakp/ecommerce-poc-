import {
  ProductsTypes,
  productsState,
  SET_LOADING,
  TOGGLE_FILTER,
  SET_FEATURED_PRODUCT,
  SET_PRODUCTS,
} from "./productsTypes";

const initialState: productsState = {
  isLoading: false,
  mobileFilter: false,
  featuredProduct: null,
  products: [],
};

const productsReducer = (state = initialState, action: ProductsTypes) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
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
    case TOGGLE_FILTER:
      return {
        ...state,
        mobileFilter: !state.mobileFilter,
      };

    default:
      return state;
  }
};

export default productsReducer;
