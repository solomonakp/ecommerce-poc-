import React from "react";
import {useDispatch} from "react-redux";
import PhotoOfTheDay from "../elements/ProductOfTheDay/PhotoOfTheDay";
import Header from "./Header";
import {getFeaturedProduct} from "../../redux/reducers/products/productsActions";
import useProducts from "../../hooks/useProducts";

interface LayoutProps {
  children: React.ReactChild;
}

export const Layout: React.FC = ({children}: LayoutProps) => {
  const dispatch = useDispatch();
  const {featuredProduct} = useProducts();

  React.useEffect(() => {
    dispatch(getFeaturedProduct());

    return () => {};
  }, []);

  return (
    <div className="layout">
      <Header />
      <main>
        {featuredProduct && <PhotoOfTheDay product={featuredProduct} />}
        {children}
      </main>
      <style jsx global>
        {`
          .layout {
            display: flex;
            flex-direction: column;
            width: 100%;
          }
          main {
            min-height: 100vh;
          }
        `}
      </style>
    </div>
  );
};

export const getLayout = (page: React.ReactElement) => {
  // if (isLoading) {
  //   return <Loader fixed={true} />;
  // }

  return <Layout>{page}</Layout>;
};
