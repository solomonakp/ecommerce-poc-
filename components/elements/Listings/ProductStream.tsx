import ProductTile from "./ProductTile";
import {Products} from "../../../types/types";

interface Props {
  products: Products;
}

const ProductStream = (props: Props) => {
  const {products} = props;
  return (
    <div className="row row-cols-1 row-cols-sm-2  row-cols-lg-3 g-5 mt-0 align-items-center">
      {products.map((product, index) => {
        return <ProductTile productDetails={product} key={index} />;
      })}
    </div>
  );
};

export default ProductStream;
