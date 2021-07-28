import React from "react";
import Header from "./Header";
interface LayoutProps {
  children: React.ReactChild;
}

export const Layout: React.FC = ({children}: LayoutProps) => {
  return (
    <div className="layout">
      <Header />
      {children}
      <style jsx global>
        {`
          .layout {
            display: flex;
            flex-direction: column;
            width: 100%;
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
