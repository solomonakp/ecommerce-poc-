import React from "react";
import CheckBox from "../../layout/CheckBox";
import RadioButton from "../../layout/RadioButton";

interface FilterProps {
  isMobile?: boolean;
}

const ProductFilter = (props: FilterProps) => {
  return (
    <aside className="w-100">
      <form>
        <CategoryFilter {...props} />
        <hr className="my-lg-5" />
        <PriceRange {...props} />
      </form>
      <style jsx>{``}</style>
    </aside>
  );
};

export default ProductFilter;

const CategoryFilter = (props: FilterProps) => {
  const {isMobile} = props;
  return (
    <div>
      <header className="mb-3  mb-lg-5 ">
        <h3 className="h3 mb-0 me-auto">Category</h3>
      </header>
      <div>
        <CheckBox
          id={isMobile ? "mobile-people" : "people"}
          label="People"
          value="people"
        />
        <CheckBox
          id={isMobile ? "mobile-premium" : "premium"}
          label="Premium"
          value="premium"
        />
        <CheckBox id={isMobile ? "mobile-pets" : "pets"} label="Pets" value="pets" />
        <CheckBox id={isMobile ? "mobile-food" : "food"} label="Food" value="food" />
        <CheckBox
          id={isMobile ? "mobile-landmarks" : "landmarks"}
          label="Landmarks"
          value="landmarks"
        />
        <CheckBox
          id={isMobile ? "mobile-cities" : "cities"}
          label="Cities"
          value="cities"
        />
        <CheckBox
          id={isMobile ? "mobile-nature" : "nature"}
          label="Nature"
          value="nature"
        />
      </div>
    </div>
  );
};

const PriceRange = (props: FilterProps) => {
  const {isMobile} = props;
  return (
    <div>
      <header className="mb-3  mb-lg-5">
        <h3 className="h3 pb-1">Price range</h3>
      </header>
      <div>
        <RadioButton
          id={isMobile ? "mobile-twenty" : "twenty"}
          label="Lower than $20"
          value="1"
        />
        <RadioButton
          id={isMobile ? "mobile-hundred" : "hundred"}
          label="$20 - $100"
          value="2"
        />
        <RadioButton
          id={isMobile ? "mobile-two-hundred" : "two-hundred"}
          label="$100 - $200"
          value="3"
        />
        <RadioButton
          id={isMobile ? "mobil-over-hundred" : "over-hundred"}
          label="More than $200"
          value="4"
        />
      </div>
    </div>
  );
};
