import Head from "next/head";
import {getLayout} from "../components/layout/Layout";

const Index = (props) => {
  return (
    <div className="container">
      <Head>
        <title>Bejamas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

Index.getLayout = getLayout;

export default Index;
