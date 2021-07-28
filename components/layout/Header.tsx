import React from "react";
import Link from "next/link";
import Logo from "../svg/Logo";
import useTheme from "../useTheme";
import CartButton from "../elements/Listings/Cart/CartButton";
import Cart from "../elements/Listings/Cart/Cart";
import useOutsideClick from "../../hooks/useOutsideClick";
interface Props {}

const Header = (props: Props) => {
  const header = React.useRef<HTMLElement>(null);

  const [showingCart, toggleShowingCart] = React.useState<boolean>(false);

  const handleToggleShowing = () => toggleShowingCart(!showingCart);

  useOutsideClick(header, () => {
    if (showingCart) {
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
          <CartButton onClick={handleToggleShowing} quantity={1} />
          {showingCart && <Cart close={handleToggleShowing} />}
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
