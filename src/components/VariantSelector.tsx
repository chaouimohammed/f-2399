import { cn } from "@/lib/utils";

interface VariantSelectorProps {
  options: Array<string | { name: string; value: string }>;
  selected: string;
  onChange: (value: string) => void;
  type?: "text" | "color";
}

export const VariantSelector = ({
  options,
  selected,
  onChange,
  type = "text"
}: VariantSelectorProps) => {
  return (
    <div className="variant-selector">
      {options.map((option, i) => {
        const value = typeof option === "string" ? option : option.value;
        const label = typeof option === "string" ? option : option.name;
        
        return (
          <button
            key={i}
            onClick={() => onChange(value)}
            className="variant-button group"
            data-active={selected === value}
          >
            {type === "color" ? (
              <>
                <span
                  className="h-8 w-8 rounded-full border"
                  style={{ backgroundColor: value }}
                />
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm opacity-0 transition-opacity group-hover:opacity-100">
                  {label}
                </span>
              </>
            ) : (
              <span className="text-sm font-medium">{label}</span>
            )}
          </button>
        );
      })}
    </div>
  );
};