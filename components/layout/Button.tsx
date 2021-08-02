import React from "react";
import useTheme from "../useTheme";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  outline?: boolean;
  bgColor?: string;
  id?: string;
  fullWidth?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  outline = false,
  id,
  fullWidth,
  className,
  ...props
}) => {
  const {
    colors: {primary, secondary, primaryLight, secondaryDark},
  } = useTheme();
  return (
    <button className={className} id={id} {...props}>
      {children}
      <style jsx>{`
        button {
          white-space: nowrap;
          letter-spacing: 0.07em;
          text-align: center;
          padding: 0.3em 2em;
          text-transform: uppercase;
          font-weight: 500;
          border-width: 3px;
          border-style: solid;
          font-size: 1rem;
          width: ${fullWidth ? "100%" : "unset"};
          transition: background-color ease-out 150ms;
          border-color: ${primary};
          background-color: ${outline ? secondary : primary};
          color: ${outline ? primary : secondary};
          &:hover,
          &:active,
          &:focus {
            background-color: ${outline ? secondaryDark : primaryLight};
            transition: background-color ease-in 150ms;
          }
        }
      `}</style>
    </button>
  );
};

export default Button;
