import { Chip } from "../../../shared/ui/Chip/Chip";

type FilterChipProps = { 
  text: string;
  size: "medium" | "large" | "small";
  onClick: () => void;
}

export function FilterChip({text, size, onClick}: FilterChipProps) {
  return (
    <Chip
    text={text}
    size={size}
    onClick={onClick}
    />
  )
}