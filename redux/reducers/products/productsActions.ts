import {
  ProductsTypes,
  SET_LOADING,
  SET_FEATURED_PRODUCT,
  TOGGLE_FILTER,
} from "./productsTypes";
import {AppThunk} from "../index";
import {Product, Products} from "../../../types/types";
import {productDb} from "../../../firebase/utilities";
import {Query} from "@firebase/firestore-types";

import {SET_PRODUCTS} from "./productsTypes";
import {OrderType, SortType} from "../../../components/elements/Listings/Sort";

export const toggleLoading = (bol: boolean): ProductsTypes => {
  return {
    type: SET_LOADING,
    payload: bol,
  };
};

export const toggleFilter = (): ProductsTypes => {
  return {
    type: TOGGLE_FILTER,
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
  return (dispatch, getStore) => {
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

export const getSortedProducts = (type: SortType, order: OrderType): AppThunk => {
  const path = type === "" ? "name" : type;

  return (dispatch) => {
    dispatch(toggleLoading(true));

    productDb
      .orderBy(path, order)
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

export const getFilteredProducts = (categories: string[], price: string): AppThunk => {
  return (dispatch) => {
    dispatch(toggleLoading(true));
    let lowerLimit = 0;
    let upperLimit = 20;
    let query: Query = productDb;

    if (categories.length > 0) {
      query = query.where("category", "in", categories);
    }
    if (price === "1") {
      query = query.where("price", "<", upperLimit);
    }
    if (price === "2") {
      lowerLimit = 20;
      upperLimit = 100;
      query = query.where("price", ">=", lowerLimit).where("price", "<=", upperLimit);
    }
    if (price === "3") {
      lowerLimit = 100;
      upperLimit = 200;
      query = query.where("price", ">=", lowerLimit).where("price", "<=", upperLimit);
    }
    if (price === "4") {
      lowerLimit = 200;
      query = query.where("price", ">=", lowerLimit);
    }

    query
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

    // .orderBy(path, order)
    // .limit(6)
    // .get()
    // .then((productsSnapShot) => {
    //   const products = productsSnapShot.docs.map((prod) => {
    //     return {id: prod.id, ...(prod.data() as Product)};
    //   });

    //   dispatch(setProducts(products));
    // })
    // .catch((e) => {
    //   console.log(e);
    //   alert("Could not retrieve Product");
    // })
    // .finally(() => {
    //   dispatch(toggleLoading(false));
    // });

    return;
  };
};
