import { Chip } from "../../../shared/ui/Chip/Chip";


type SortChipProps = { 
  text: string;
  size: "medium" | "large" | "small";
  onClick: () => void;
}

export function SortChip({text, size, onClick}: SortChipProps) {
  return (
    <Chip
    text={text}
    size={size}
    onClick={onClick}
    />
  )
}