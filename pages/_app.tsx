import React from "react";
import {wrapper} from "../redux/store";
import "../styles/main.scss";

const MyApp = ({Component, pageProps}) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps}></Component>);
};

export default wrapper.withRedux(MyApp);
