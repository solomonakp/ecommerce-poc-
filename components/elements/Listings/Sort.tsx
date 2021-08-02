import React from "react";
import FilterIcon from "../../svg/FilterIcon";
import SortIcon from "../../svg/SortIcon";

interface SortProps {}

const Sort = (props: SortProps) => {
  return (
    <div className="d-flex justify-content-lg-end align-items-center">
      <SortButton />
      <div className="select-container d-none d-lg-block">
        <select className="form-select" aria-label="Sort Select">
          <option selected value={1}>
            Price
          </option>
          <option value={2}>Alphabetically</option>
        </select>
      </div>
      <div className="d-block d-lg-none">
        <FilterButton />
      </div>
      <style jsx>
        {`
          .select-container {
            max-width: 6.563rem;
          }
        `}
      </style>
    </div>
  );
};

export default Sort;

interface SortButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const SortButton = (props: SortButtonProps) => {
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

const FilterButton = (props: SortButtonProps) => {
  const {className, ...rest} = props;
  return (
    <button
      className="bg-transparent border-0 d-flex justify-content-center align-items-center"
      role="button"
      aria-label="sorting-button"
      type="button"
      {...rest}
    >
      <FilterIcon />
    </button>
  );
};
