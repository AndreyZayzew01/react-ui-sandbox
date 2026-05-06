import React from "react";
import "./Button.css";

type ButtonProps = {
  buttonText: string | number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
};

export const Button = React.memo(
  ({ buttonText, onClick, type = "button", disabled, className }: ButtonProps) => {
    const mergedClassName = `button${className ? ` ${className}` : ""}`;
    return (
      <div>
        <button
          className={mergedClassName}
          onClick={onClick}
          type={type}
          disabled={disabled}
        >
          {buttonText}
        </button>
      </div>
    );
  },
);
