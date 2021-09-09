import {useState, useEffect, useRef, ChangeEvent} from "react";
import {getFilteredProducts} from "../../../redux/reducers/products/productsActions";
import CheckBox from "../../layout/CheckBox";
import RadioButton from "../../layout/RadioButton";
import {useDispatch} from "react-redux";

interface FilterProps {
  isMobile?: boolean;
}

const ProductFilter = (props: FilterProps) => {
  const dispatch = useDispatch();

  const {isMobile} = props;

  const [categories, setCategories] = useState<string[]>([]);

  const [price, setPrice] = useState<string>("");

  const isMounted = useRef<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const inCategories = categories.find((category) => category === value);

    if (inCategories) {
      const newCategories = categories.filter((category) => category !== value);
      setCategories(newCategories);
    } else {
      const newCategories = [...categories, value];
      setCategories(newCategories);
    }
  };

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
    return;
  };

  useEffect(() => {
    if (isMounted.current) {
      dispatch(getFilteredProducts(categories, price));
    } else {
      isMounted.current = true;
    }

    return;
  }, [price, categories]);

  return (
    <aside className="w-100">
      <div>
        <header className="mb-3  mb-lg-5 ">
          <h3 className="h3 mb-0 me-auto">Category</h3>
        </header>
        <div>
          <CheckBox
            id={isMobile ? "mobile-people" : "people"}
            label="People"
            value="People"
            onChange={handleChange}
          />
          <CheckBox
            id={isMobile ? "mobile-premium" : "premium"}
            label="Premium"
            value="Premium"
            onChange={handleChange}
          />
          <CheckBox
            id={isMobile ? "mobile-pets" : "pets"}
            label="Pets"
            value="Pets"
            onChange={handleChange}
          />
          <CheckBox
            id={isMobile ? "mobile-food" : "food"}
            label="Food"
            value="Food"
            onChange={handleChange}
          />
          <CheckBox
            id={isMobile ? "mobile-landmarks" : "landmarks"}
            label="Landmarks"
            value="Landmarks"
            onChange={handleChange}
          />
          <CheckBox
            id={isMobile ? "mobile-cities" : "cities"}
            label="Cities"
            value="Cities"
            onChange={handleChange}
          />
          <CheckBox
            id={isMobile ? "mobile-nature" : "nature"}
            label="Nature"
            value="Nature"
            onChange={handleChange}
          />
        </div>
      </div>
      <hr className="my-lg-5" />
      <div>
        <header className="mb-3  mb-lg-5">
          <h3 className="h3 pb-1">Price range</h3>
        </header>
        <div>
          <RadioButton
            id={isMobile ? "mobile-twenty" : "twenty"}
            label="Lower than $20"
            value="1"
            name="price"
            checked={price === "1"}
            onChange={handlePriceChange}
          />
          <RadioButton
            id={isMobile ? "mobile-hundred" : "hundred"}
            label="$20 - $100"
            value="2"
            name="price"
            checked={price === "2"}
            onChange={handlePriceChange}
          />
          <RadioButton
            id={isMobile ? "mobile-two-hundred" : "two-hundred"}
            label="$100 - $200"
            value="3"
            name="price"
            checked={price === "3"}
            onChange={handlePriceChange}
          />
          <RadioButton
            id={isMobile ? "mobil-over-hundred" : "over-hundred"}
            label="More than $200"
            value="4"
            name="price"
            checked={price === "4"}
            onChange={handlePriceChange}
          />
        </div>
      </div>

      <style jsx>{``}</style>
    </aside>
  );
};

export default ProductFilter;
