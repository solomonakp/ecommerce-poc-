import {fireStore} from "./../../../firebase/firebase";
import {cartTypes, TOGGLE_OPEN, SET_CART_PRODUCTS} from "./cartTypes";
import {AppThunk} from "../index";
import {Product, Products} from "../../../types/types";
import {cartDb} from "../../../firebase/utilities";

import {SET_UPDATING_CART} from "./cartTypes";

export const setUpdatingCart = (bol: boolean): cartTypes => {
  return {
    type: SET_UPDATING_CART,
    payload: bol,
  };
};

export const toggleOpen = (): cartTypes => {
  return {
    type: TOGGLE_OPEN,
  };
};

export const setCartProduct = (product: Products): cartTypes => {
  return {
    type: SET_CART_PRODUCTS,
    payload: product,
  };
};

export const getCartProduct = (): AppThunk => {
  return (dispatch) => {
    dispatch(setUpdatingCart(true));

    cartDb
      .get()
      .then((productsSnapShot) => {
        const products = productsSnapShot.docs.map((prod) => {
          return {id: prod.id, ...(prod.data() as Product)};
        });

        dispatch(setCartProduct(products));
      })
      .catch((e) => {
        console.log(e);
        alert("Could not retrieve cart Product");
      })
      .finally(() => {
        dispatch(setUpdatingCart(false));
      });

    return;
  };
};

export const addToCart = (product: Product): AppThunk => {
  return (dispatch, getState) => {
    dispatch(setUpdatingCart(true));

    const {isOpen} = getState().cart;

    cartDb
      .add(product)
      .then(() => {
        // open cart here
        if (isOpen === false) {
          dispatch(toggleOpen());
        }

        console.log("added to cart");
      })
      .catch((e) => {
        console.log("could not add", e);
      })
      .finally(() => {
        dispatch(setUpdatingCart(false));
      });

    return;
  };
};

export const removeFromCart = (id: string): AppThunk => {
  return (dispatch, getState) => {
    dispatch(setUpdatingCart(true));

    const {isOpen} = getState().cart;

    cartDb
      .where("id", "==", id)
      .get()
      .then((cartSnapshot) => {
        const [productRef] = cartSnapshot.docs;
        fireStore.doc(`cart/${productRef.id}`).delete();
      })
      .then(() => {
        // open cart here
        if (isOpen) {
          dispatch(toggleOpen());
        }

        console.log("removed from  cart");
      })
      .catch((e) => {
        console.log("could not remove from cart", e);
      })
      .finally(() => {
        dispatch(setUpdatingCart(false));
      });

    return;
  };
};

export const clearCart = (): AppThunk => {
  return (dispatch, getState) => {
    dispatch(setUpdatingCart(true));

    const {isOpen} = getState().cart;

    cartDb
      .get()
      .then((cartSnapshot) => {
        cartSnapshot.forEach((doc) => {
          fireStore.doc(`cart/${doc.id}`).delete();
        });
      })
      .then(() => {
        // open cart here
        if (isOpen) {
          dispatch(toggleOpen());
        }

        console.log("cleared cart");
      })
      .catch((e) => {
        console.log("could not clear cart", e);
      })
      .finally(() => {
        dispatch(setUpdatingCart(false));
      });

    return;
  };
};
