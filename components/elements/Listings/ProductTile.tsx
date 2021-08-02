import React, {ReactElement, useState} from "react";
import Image from "next/image";
import {toBase64, shimmer} from "../../../utilities/functions";
import useTheme from "../../useTheme";
import Button from "../../layout/Button";
import {Product} from "../../../types/types";
import {useDispatch} from "react-redux";
import {addToCart, removeFromCart} from "../../../redux/reducers/cart/cartActions";
import useCart from "../../../hooks/useCart";

interface Props {
  productDetails: Product;
}

function ProductTile(props: Props): ReactElement {
  const {
    productDetails: {
      bestseller,
      category,
      name,
      price,
      image: {alt, src},
      id,
    },
  } = props;
  const [showButton, setShowButton] = useState<boolean>(false);

  const dispatch = useDispatch();

  const {} = useTheme();

  const {products} = useCart();

  const handleAddToCart = () => dispatch(addToCart(props.productDetails));
  const handleRemoveFromCart = () => dispatch(removeFromCart(id));

  const inCart = products.find((productInCart) => id === productInCart.id);

  return (
    <div className="col mt-0" onMouseLeave={() => setShowButton(false)}>
      <div className=" ">
        <div className="product h-100  mb-3">
          <div
            className="image-container position-relative"
            onMouseEnter={() => setShowButton(true)}
          >
            <Image
              src={src}
              alt={alt}
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(281, 390))}`}
              width={281}
              height={390}
            />
            {bestseller ? (
              <span className="best-seller position-absolute bg-secondary text-primary text-nowrap">
                Best Seller
              </span>
            ) : null}

            {showButton && (
              <Button
                fullWidth
                className="product-button position-absolute"
                onClick={inCart ? handleRemoveFromCart : handleAddToCart}
              >
                {inCart ? "Remove" : "Add to Cart"}
              </Button>
            )}
          </div>
          <div className="product-body text-start">
            <p className="product-category mb-0">{category}</p>
            <h5 className="product-title mb-0">{name}</h5>
            <p className="product-price mb-0">${price}</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .best-seller {
          top: 0;
          left: 0;
          font-size: 0.875rem;
          padding: 0 0.313rem;
        }
        :global(.product-button) {
          bottom: 0;
          left: 0;
          right: 0;
        }
        .product-price {
          font-size: 1.25rem;
        }
      `}</style>
    </div>
  );
}

export default ProductTile;
