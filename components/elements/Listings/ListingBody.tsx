import React from "react";
import MobileFilter from "./MobileFilter";
import ProductFilter from "./ProductFilter";
import ProductStream from "./ProductStream";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/reducers/index";

interface Props {}

const ListingBody = (props: Props) => {
  const {products} = useSelector((state: RootState) => state.products);
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
      <MobileFilter />
    </div>
  );
};

export default ListingBody;
