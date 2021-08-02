import React from "react";

interface Props {
  id: string;
  value?: string;
  label: string;
  name?: string;
}

const RadioButton = (props: Props) => {
  const {id, value = "", label, name} = props;
  return (
    <div className="form-check mb-3  mb-lg-4">
      <input
        className="form-check-input"
        type="radio"
        name={name}
        id={id}
        value={value}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
