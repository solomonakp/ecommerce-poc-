import React from "react";
import useTheme from "../../useTheme";

interface Props {}

const Pagination = (props: Props) => {
  const {
    colors: {primary},
  } = useTheme();

  return (
    <div className="d-flex w-100 justify-content-center pt-5">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link fw-bold" href="#" aria-label="Previous">
              <span aria-hidden="true">{"<"}</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              4
            </a>
          </li>
          <li className="page-item fw-bold">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">{">"}</span>
            </a>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        a.page-link {
          border: none;
          font-size: 1.688rem;
          color: #b4b4b4;
          & span {
            color: ${primary};
          }
          &.active {
            color: ${primary};
          }
        }
      `}</style>
    </div>
  );
};

export default Pagination;
