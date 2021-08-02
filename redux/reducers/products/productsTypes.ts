import {Product, Products} from "../../../types/types";
export const SET_LOADING = "TOGGLE_LOADING";
export const TOGGLE_OPEN = "TOGGLE_OPEN";
export const SET_FEATURED_PRODUCT = "SET_FEATURED_PRODUCT";
export const SET_PRODUCTS = "SET_PRODUCTS";

interface ToggleLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}

interface SetProducts {
  type: typeof SET_PRODUCTS;
  payload: Products;
}

// interface ToggleOpenAction {
//   type: typeof TOGGLE_OPEN;
// }

interface SetFeaturedProduct {
  type: typeof SET_FEATURED_PRODUCT;
  payload: Product;
}

export interface productsState {
  isLoading: boolean;
  // isOpen: boolean;
  featuredProduct: null | Product;
  products: [] | Products;
}

export type ProductsTypes = ToggleLoadingAction | SetFeaturedProduct | SetProducts;
