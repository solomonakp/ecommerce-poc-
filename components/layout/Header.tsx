import React from "react";
import Link from "next/link";
import Logo from "../svg/Logo";
import useTheme from "../useTheme";
import CartButton from "../elements/Cart/CartButton";
import Cart from "../elements/Cart/Cart";
import useOutsideClick from "../../hooks/useOutsideClick";
import {cartDb} from "../../firebase/utilities";
import {Product} from "../../types/types";
import {setCartProduct, toggleOpen} from "../../redux/reducers/cart/cartActions";
import useCart from "../../hooks/useCart";
import {useDispatch} from "react-redux";

const Header = () => {
  let unsubscribe = null;

  const dispatch = useDispatch();

  const header = React.useRef<HTMLElement>(null);

  const {products, isOpen} = useCart();

  const handleToggleShowing = () => dispatch(toggleOpen());

  React.useEffect(() => {
    unsubscribe = cartDb.onSnapshot((cartSnapshot) => {
      const products = cartSnapshot.docs.map((prod) => {
        return {id: prod.id, ...(prod.data() as Product)};
      });

      dispatch(setCartProduct(products));
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useOutsideClick(header, () => {
    if (isOpen) {
      handleToggleShowing();
    }
  });

  const {
    colors: {hrColor},
  } = useTheme();

  return (
    <header className="container-fluid container-lg position-relative" ref={header}>
      <nav className="d-flex align-items-center">
        <Link href="/">
          <a className="logo-link">
            <Logo />
          </a>
        </Link>

        <div className="cart-container">
          <CartButton onClick={handleToggleShowing} quantity={products.length} />
          {isOpen && <Cart close={handleToggleShowing} items={products} />}
        </div>
      </nav>
      <style jsx>{`
        header {
          border-bottom-width: 0.188rem;
          border-bottom-style: solid;
          border-bottom-color: ${hrColor};
        }
        nav {
          padding: 1.5rem 0;
        }
        .logo-link {
          margin-right: auto;
        }
      `}</style>
    </header>
  );
};

export default Header;
