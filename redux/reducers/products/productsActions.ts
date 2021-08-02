import {fireStore} from "./../../../firebase/firebase";
import {
  ProductsTypes,
  SET_LOADING,
  TOGGLE_OPEN,
  SET_FEATURED_PRODUCT,
} from "./productsTypes";
import {AppThunk} from "../index";
import {Product, Products} from "../../../types/types";
import {productDb} from "../../../firebase/utilities";

import {SET_PRODUCTS} from "./productsTypes";

export const toggleLoading = (bol: boolean): ProductsTypes => {
  return {
    type: SET_LOADING,
    payload: bol,
  };
};

export const toggleOpen = (): ProductsTypes => {
  return {
    type: TOGGLE_OPEN,
  };
};

export const setFeaturedProduct = (product: Product): ProductsTypes => {
  return {
    type: SET_FEATURED_PRODUCT,
    payload: product,
  };
};

export const setProducts = (products: Products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const getFeaturedProduct = (): AppThunk => {
  return (dispatch) => {
    dispatch(toggleLoading(true));

    productDb
      .get()
      .then((productsSnapShot) => {
        const products = productsSnapShot.docs.map((prod) => {
          return {id: prod.id, ...(prod.data() as Product)};
        });

        const featuredProducts = products.filter((product) => {
          return product.featured === true;
        });

        const [featuredProduct] = featuredProducts;

        dispatch(setFeaturedProduct(featuredProduct));
      })
      .catch((e) => {
        console.log(e);
        alert("Could not retrieve featured Product");
      })
      .finally(() => {
        dispatch(toggleLoading(false));
      });

    return;
  };
};

export const getProducts = (): AppThunk => {
  return (dispatch) => {
    dispatch(toggleLoading(true));

    productDb
      .limit(6)
      .get()

      .then((productsSnapShot) => {
        const products = productsSnapShot.docs.map((prod) => {
          return {id: prod.id, ...(prod.data() as Product)};
        });

        dispatch(setProducts(products));
      })
      .catch((e) => {
        console.log(e);
        alert("Could not retrieve Product");
      })
      .finally(() => {
        dispatch(toggleLoading(false));
      });

    return;
  };
};
