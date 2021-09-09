import React from "react";
import Button from "../../layout/Button";
import Image from "next/image";
import useTheme from "../../useTheme";
import {toBase64, shimmer, formatBytes} from "../../../utilities/functions";
import {Product, Recommendation} from "../../../types/types";
import {useDispatch} from "react-redux";
import {addToCart, removeFromCart} from "../../../redux/reducers/cart/cartActions";
import useCart from "../../../hooks/useCart";

interface Props {
  product: Product;
}

const PhotoOfTheDay = (props: Props) => {
  const dispatch = useDispatch();

  const {product} = props;

  const {products} = useCart();

  const {
    name,
    details: {
      description,
      recommendations,
      dimmentions: {width, height},
      size,
    },
    image: {alt, src},
    id,
  } = product;
  const {
    breakPoints: {maxXs},
  } = useTheme();

  const handleAddToCart = () => dispatch(addToCart(product));
  const handleRemoveFromCart = () => dispatch(removeFromCart(id));

  const inCart = products.find((productInCart) => {
    return id === productInCart.id;
  });

  return (
    <section id="product-of-the-day" className="my-5">
      <div className="container mb-lg-4 mb-lg-3">
        <div className="row mb-3 align-items-center">
          <div className="col-12 col-lg-auto me-auto r">
            <header className="d-flex align-items-center w-100 h-100">
              <h1 className="text-primary h1">{name}</h1>
            </header>
          </div>
          <div className="col-12 col-lg-auto d-none d-lg-block">
            <Button onClick={inCart ? handleRemoveFromCart : handleAddToCart}>
              {inCart ? "Remove" : "Add to Cart"}
            </Button>
          </div>
        </div>
        <div className="image-container position-relative w-100 mb-2 mb-lg-0">
          <Image
            src={src + `${id}/1295/553`}
            alt={alt}
            layout="intrinsic"
            placeholder="blur"
            objectFit="cover"
            objectPosition="center"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1295, 553))}`}
            width={1295}
            height={553}
          />

          <div className="water-mark position-absolute bg-secondary fw-bold text-primary">
            Photo of the day
          </div>
        </div>

        <Button
          fullWidth
          className="d-lg-none"
          onClick={inCart ? handleRemoveFromCart : handleAddToCart}
        >
          {inCart ? "Remove" : "Add to Cart"}
        </Button>

        <div className="photo-details w-100  mt-4">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="details">
                <header className="mb-4">
                  <h3 className="h3">About {name}</h3>
                </header>
                <article>
                  <p className="mb-lg-4 mb-3">{description}</p>
                </article>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="w-100 text-start text-lg-end">
                <header className="mb-4">
                  <h3 className="h3">People also buy</h3>
                </header>
                <div className="w-100 mb-lg-5 mb-4">
                  <RecImgs recommendations={recommendations} />
                </div>
                <div className="w-100 spec">
                  <header className="mb-4">
                    <h3 className="h3 mb-3">Details</h3>
                    <p className="mb-3">
                      Size: {width} x {height} pixel
                    </p>
                    <p>Size: {formatBytes(size)}</p>
                  </header>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 container-lg g-0">
        <hr />
      </div>

      <style jsx>{`
        p {
          font-size: 1.063rem;
        }
        .water-mark {
          bottom: 0;
          left: 0;
          font-size: 1.25rem;
          padding: 0.75em 2.5em;
          @media (${maxXs}) {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </section>
  );
};

export default PhotoOfTheDay;

interface RecImg {
  recommendations: Recommendation[];
}

const RecImgs = (props: RecImg) => {
  const {recommendations} = props;

  return (
    <div className="row  justify-content-lg-end justify-content-start flex-nowrap">
      {recommendations.map(({alt, src}, index) => {
        return (
          <div className="col-sm-auto col-4" key={index}>
            <Image
              src={src + `${index + 100}/117/147`}
              alt={alt}
              layout="intrinsic"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(117, 147))}`}
              width={117}
              height={147}
            />
          </div>
        );
      })}
    </div>
  );
};
