import React from "react";
import "./Button.css";

type ButtonProps = {
  buttonText: string | number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  tooltip?: string;
  tooltipPlacement?: "top" | "bottom" | "left" | "right";
};

export const Button = React.memo(
  ({
    buttonText,
    onClick,
    type = "button",
    disabled,
    className,
    tooltip,
    tooltipPlacement = "bottom",
  }: ButtonProps) => {
    const mergedClassName = `button${className ? ` ${className}` : ""}`;
    return (
      <div className="buttonWrapper">
        <button
          className={mergedClassName}
          onClick={onClick}
          type={type}
          disabled={disabled}
          aria-label={typeof buttonText === "string" ? buttonText : undefined}
        >
          {buttonText}
        </button>
        {tooltip && (
          <span
            role="tooltip"
            className={`tooltip tooltip--${tooltipPlacement}`}
          >
            {tooltip}
          </span>
        )}
      </div>
    );
  },
);
