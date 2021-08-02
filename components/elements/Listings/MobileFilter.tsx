import React from "react";
import Button from "../../layout/Button";
import ProductFilter from "./ProductFilter";
import useTheme from "../../useTheme";
import CloseIcon from "../../svg/CloseIcon";

interface Props {}

const MobileFilter = (props: Props) => {
  const {
    border: {cartBorder},
  } = useTheme();

  return (
    <div className="mobile-filter position-fixed d-lg-none">
      <button className="bg-transparent border-0 d-lg-none close-btn position-absolute">
        <CloseIcon />
      </button>

      <div className="overlay position-fixed">
        <div className="overflow-container overflow-scroll position-absolute bg-secondary ">
          <div className="pt-3 mx-5 ">
            <ProductFilter isMobile={true} />
          </div>
        </div>
      </div>

      <div className="button-container position-absolute bg-secondary pt-4 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Button outline fullWidth className="me-auto">
                Cancel
              </Button>
            </div>
            <div className="col-6">
              <Button fullWidth>Save</Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mobile-filter {
          &,
          .overlay {
            top: 0;
          }

          .close-btn {
            right: 30px;
            top: 12%;
            z-index: 12;
          }

          .overlay {
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 10;
            cursor: pointer;
          }
          &,
          .overflow-container,
          .button-container,
          .overlay {
            right: 0;
            left: 0;
            bottom: 0;
          }
          .overflow-container {
            top: 10%;
            width: 100%;
            padding-bottom: 6.25rem;
          }
          .button-container {
            border-top: ${cartBorder};
            z-index: 12;
          }
        }
      `}</style>
    </div>
  );
};

export default MobileFilter;
