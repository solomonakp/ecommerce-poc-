import React from "react";
import Image from "next/image";
import {toBase64, shimmer} from "../../../utilities/functions";
import {Product} from "../../../types/types";

interface Props {
  item: Product;
}

const CartItem = (props: Props) => {
  const {
    item: {
      name,
      price,
      image: {src, alt},
      id,
    },
  } = props;

  return (
    <div className="w-100 container mb-1">
      <div className="row">
        <div className="col-7 text-container">
          <p className="text-primary m-0">
            <strong>{name}</strong>
          </p>
          <div className="w-100 amount">
            <span>&#36;</span>
            {price}
          </div>
        </div>
        <div className="col-5 d-flex align-items-center">
          <Image
            src={src + `${id + "1"}/140/177`}
            alt={alt}
            width={140}
            height={77}
            layout="intrinsic"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(140, 77))}`}
          />
        </div>
      </div>
      <style jsx>
        {`
          p {
            font-size: 1.125rem;
          }
          .text-container {
            padding-top: 0.3rem;
          }
          .amount {
            font-size: 1.5rem;
          }
        `}
      </style>
    </div>
  );
};

export default CartItem;
