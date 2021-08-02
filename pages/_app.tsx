import React from "react";
import {wrapper} from "../redux/store";
import "../styles/main.scss";
import {useDispatch} from "react-redux";
import {getFeaturedProduct} from "../redux/reducers/products/productsActions";

const MyApp = ({Component, pageProps}) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getFeaturedProduct());
  }, []);

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps}></Component>);
};

export default wrapper.withRedux(MyApp);
