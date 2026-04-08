import "./Button.css";

type ButtonProps = {
  buttonText: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ buttonText, onClick }: ButtonProps) => {

return (
  <div>
    <button className="button" onClick={onClick}>{buttonText}</button>
  </div>
);
} 