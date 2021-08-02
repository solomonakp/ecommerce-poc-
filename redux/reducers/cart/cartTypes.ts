import {Products} from "../../../types/types";
export const TOGGLE_OPEN = "TOGGLE_OPEN";
export const SET_CART_PRODUCTS = "SET_CART_PRODUCTS";
export const SET_UPDATING_CART = "SET_UPDATING_CART";

interface ToggleOpen {
  type: typeof TOGGLE_OPEN;
}

interface SetCartProducts {
  type: typeof SET_CART_PRODUCTS;
  payload: Products;
}

interface SetUpdatingCart {
  type: typeof SET_UPDATING_CART;
  payload: boolean;
}

export interface cartState {
  updatingCart: boolean;
  isOpen: boolean;
  products: [] | Products;
}

export type cartTypes = ToggleOpen | SetCartProducts | SetUpdatingCart;
