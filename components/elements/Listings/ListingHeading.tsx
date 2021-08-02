import Link from "next/link";
import React from "react";
import useTheme from "../../useTheme";
import Sort from "./Sort";

interface Props {}

export const ListingHeading = (props: Props) => {
  const {
    breakPoints: {maxXs},
  } = useTheme();

  return (
    <div className="w-100 mb-3 mb-lg-4">
      <div className="row align-items-center flex-nowrap">
        <div className="col-auto me-auto ">
          <header>
            <nav aria-label="breadcrumb" className="h-100 d-flex align-items-center">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link href="#">
                    <a>Photography</a>
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Premium Photos
                </li>
              </ol>
            </nav>
          </header>
        </div>
        <div className="col-auto">
          <Sort />
        </div>
      </div>
      <style jsx>
        {`
          a {
            text-decoration: none;
          }
          ol.breadcrumb {
            font-weight: bold;
            & .active {
              font-weight: normal;
            }
            @media (${maxXs}) {
              font-size: 1.125rem;
            }
            @media (max-width: 400px) {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </div>
  );
};
