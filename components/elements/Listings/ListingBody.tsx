import React from "react";
import MobileFilter from "./MobileFilter";
import ProductFilter from "./ProductFilter";
import ProductStream from "./ProductStream";
import useProducts from "../../../hooks/useProducts";

const ListingBody = () => {
  const {mobileFilter, products} = useProducts();
  return (
    <div className="row">
      <div className="col-3 d-none d-lg-block">
        <ProductFilter />
      </div>
      <div className="col-12 col-lg-9">
        <ProductStream products={products} />
        {/* cards */}
        {/* pagination */}
      </div>
      {mobileFilter && <MobileFilter />}
    </div>
  );
};

export default ListingBody;
