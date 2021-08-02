import React from "react";
import CartIcon from "../../svg/CartIcon";

interface Props {
  onClick: () => void;
  quantity: number;
}

const CartButtton = (props: Props) => {
  const {onClick, quantity} = props;
  return (
    <div>
      <button
        className="bg-transparent border-0 position-relative"
        role="button"
        aria-label="shopping-cart"
        onClick={onClick}
      >
        {" "}
        <CartIcon />
        {quantity > 0 ? (
          <span className="counter bg-primary text-secondary position-absolute d-flex justify-content-center align-items-center">
            {quantity}
          </span>
        ) : null}
      </button>
      <style jsx>{`
        button {
        }
        span {
          width: 15px;
          height: 15px;
          bottom: -6.5px;
          right: 0;
          font-size: 0.75rem;
        }
      `}</style>
    </div>
  );
};

export default CartButtton;
