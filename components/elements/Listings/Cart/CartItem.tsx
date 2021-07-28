import React from "react";
import Image from "next/image";

interface Props {}

const CartItem = (props: Props) => {
  return (
    <div className="w-100 container">
      <div className="row">
        <div className="col-7 text-container">
          <p className="text-primary m-0">
            <strong>Samurai King Resting</strong>
          </p>
          <div className="w-100 amount">
            <span>&#36;</span>
            10000.00
          </div>
        </div>
        <div className="col-5 d-flex align-items-center">
          <Image
            src="/img/thumbnail.png"
            alt="Picture of the author"
            width={140}
            height={77}
            layout="intrinsic"
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
