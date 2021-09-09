import CloseIcon from "../../svg/CloseIcon";
import CartItem from "./CartItem";
import useTheme from "../../useTheme";
import Button from "../../layout/Button";
import {Products} from "../../../types/types";
import {useDispatch} from "react-redux";
import {clearCart} from "../../../redux/reducers/cart/cartActions";

interface Props {
  close: () => void;
  items: Products;
}

const Cart = (props: Props) => {
  const {close, items} = props;

  const dispatch = useDispatch();

  const {
    border: {cartBorder},
    breakPoints: {maxXs},
  } = useTheme();

  const handleClear = () => dispatch(clearCart());

  return (
    <div className="position-absolute cart-details bg-secondary">
      <div className="d-flex justify-content-end mb-3">
        <button className="bg-transparent border-0" onClick={close}>
          <CloseIcon />
        </button>
      </div>
      <div className="cart-items">
        {items.map((product, index) => {
          return <CartItem item={product} key={index} />;
        })}
      </div>
      <hr className="mx-2" />
      <Button outline fullWidth onClick={handleClear}>
        clear
      </Button>

      <style jsx>{`
        .cart-details {
          z-index: 5;
          width: 25rem;
          right: 0;
          padding: 0.75rem;
          border: ${cartBorder};
          top: 100%;
          @media (${maxXs}) {
            left: 0;
            right: 0;
            width: 100%;
          }
        }
        hr {
          border: 1px solid #c2c2c2;
        }
      `}</style>
    </div>
  );
};

export default Cart;
