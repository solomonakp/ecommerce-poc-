import React from "react";

interface Props {
  id: string;
  value?: string;
  label: string;
  name?: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const RadioButton = (props: Props) => {
  const {id, value = "", onChange, checked, label, name} = props;
  return (
    <div className="form-check mb-3  mb-lg-4">
      <input
        className="form-check-input"
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
