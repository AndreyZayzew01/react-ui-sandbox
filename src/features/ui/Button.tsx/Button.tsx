import React from "react";
import "./Button.css";

type ButtonProps = {
  buttonText: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = React.memo(({ buttonText, onClick }: ButtonProps) => {

return (
  <div>
    <button className="button" onClick={onClick}>{buttonText}</button>
  </div>
);
}); 