import Head from "next/head";
import {ListingSection} from "../components/elements/Listings/ListingSection";
import {getLayout} from "../components/layout/Layout";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getProducts} from "../redux/reducers/products/productsActions";

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    return;
  }, []);

  return (
    <div id="index-page" className="page">
      <Head>
        <title>Bejamas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ListingSection />
    </div>
  );
};

Index.getLayout = getLayout;

export default Index;
