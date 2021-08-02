import React from "react";
import {wrapper} from "../redux/store";
import "../styles/main.scss";
import {useDispatch} from "react-redux";
import {getFeaturedProduct} from "../redux/reducers/products/productsActions";
import {fireStore} from "../firebase/firebase";

const MyApp = ({Component, pageProps}) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getFeaturedProduct());
    // fireStore
    //   .collection("products")
    //   .where("category", "in", ["People", "Premium"])
    //   .get()
    //   .then((products) => {
    //     console.log(products.docs, "filtered");
    //   });
  }, []);

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps}></Component>);
};

export default wrapper.withRedux(MyApp);
