import {fireStore} from "./firebase";

export const productDb = fireStore.collection("products");

export const cartDb = fireStore.collection("cart");
