import "./Chip.css";

type ChipProps = { 
text: string;
size: "small" | "medium" | "large";
onClick: () => void;
}

export function Chip({text, size, onClick} : ChipProps) {

  return (
    <button className={`chip ${size}`} onClick={onClick}>
      {text}
    </button>
  )
}