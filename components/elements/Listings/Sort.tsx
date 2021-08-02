import React, {useState, useEffect, useRef} from "react";
import {useDispatch} from "react-redux";
import FilterIcon from "../../svg/FilterIcon";
import SortIcon from "../../svg/SortIcon";
import {getSortedProducts} from "../../../redux/reducers/products/productsActions";
import {toggleFilter} from "../../../redux/reducers/products/productsActions";

export type SortType = "price" | "name" | "";

export type OrderType = "asc" | "desc";

const Sort = () => {
  const dispatch = useDispatch();

  const [order, setOrder] = useState<OrderType>("asc");

  const [selectSort, setSelectSort] = useState<SortType>("");

  const isMounted = useRef<boolean>(false);

  const handleFilterToggle = () => dispatch(toggleFilter());

  useEffect(() => {
    if (isMounted.current) {
      dispatch(getSortedProducts(selectSort, order));
    } else {
      isMounted.current = true;
    }

    return;
  }, [selectSort, order]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectSort(e.target.value as SortType);
  };

  const handleClick = () => {
    if (order === "asc") {
      setOrder("desc");
    } else {
      setOrder("asc");
    }
  };

  return (
    <div className="d-flex justify-content-lg-end align-items-center">
      <SortButton onClick={handleClick} />
      <div className="select-container d-none d-lg-block">
        <select
          className="form-select"
          aria-label="Sort Select"
          onChange={handleChange}
          value={selectSort}
        >
          <option value={""}>Select</option>
          <option value={"price"}>Price</option>
          <option value={"name"}>Alphabetically</option>
        </select>
      </div>
      <div className="d-block d-lg-none">
        <FilterButton onClick={handleFilterToggle} />
      </div>
      <style jsx>
        {`
          .select-container {
            max-width: 7.563rem;
          }
        `}
      </style>
    </div>
  );
};

export default Sort;

const SortButton = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  const {className, ...rest} = props;
  return (
    <div className={`d-none d-lg-flex align-items-center me-2 ${className}`}>
      <button
        className="bg-transparent border-0 d-flex justify-content-center align-items-center"
        role="button"
        aria-label="sorting-button"
        type="button"
        {...rest}
      >
        <SortIcon />
      </button>
      <span className="grey">Sort By</span>
      <style jsx>{`
        button {
        }
        span.grey {
          font-size: 1.25rem;
        }
      `}</style>
    </div>
  );
};

const FilterButton = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  const {className, ...rest} = props;
  return (
    <button
      className={`bg-transparent border-0 d-flex justify-content-center align-items-center ${className}`}
      role="button"
      aria-label="sorting-button"
      type="button"
      {...rest}
    >
      <FilterIcon />
    </button>
  );
};
