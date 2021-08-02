import React from "react";
import useTheme from "../useTheme";

interface Props {
  id: string;
  value?: string;
  label: string;
}

const CheckBox = (props: Props) => {
  const {id, value = "", label} = props;

  const {
    breakPoints: {minLg},
  } = useTheme();
  return (
    <div className="form-check mb-3  mb-lg-4">
      <input className="form-check-input me-lg-3" type="checkbox" value={value} id={id} />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
      <style jsx global>
        {`
          .form-check {
            @media (${minLg}) {
              margin-bottom: 1.125rem;
            }
            input,
            label {
              font-size: 1.25rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default CheckBox;
