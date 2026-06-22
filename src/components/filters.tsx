import { ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

/** Multi-select dropdown used by the Rechtsnorm and Leistung lists. */
export function FilterDropdown({
  label,
  options,
  selected,
  onToggle,
  renderOption,
}: {
  label: string;
  options: string[];
  selected: string[];
  onToggle: (v: string) => void;
  renderOption?: (opt: string) => React.ReactNode;
}) {
  const count = selected.length;
  return (
    <Popover>
      <PopoverTrigger
        className={cn(
          "inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-xs transition-colors select-none",
          count > 0
            ? "bg-primary/10 border-primary/30 text-primary"
            : "bg-card hover:bg-muted text-foreground",
        )}
      >
        {label}
        {count > 0 && (
          <span className="rounded bg-primary text-primary-foreground px-1 text-[10px] font-medium tabular-nums">
            {count}
          </span>
        )}
        <ChevronDown className="h-3 w-3" strokeWidth={1.5} />
      </PopoverTrigger>
      <PopoverContent>
        <ul>
          {options.map((opt) => {
            const active = selected.includes(opt);
            return (
              <li key={opt}>
                <label
                  className={cn(
                    "flex items-center gap-2 text-xs rounded px-2 py-1.5 cursor-pointer hover:bg-muted",
                    active && "text-primary font-medium",
                  )}
                >
                  <Checkbox
                    checked={active}
                    onCheckedChange={() => onToggle(opt)}
                    className="shadow-none"
                  />
                  {renderOption ? renderOption(opt) : opt}
                </label>
              </li>
            );
          })}
        </ul>
      </PopoverContent>
    </Popover>
  );
}

/** Small inline tag/chip. */
export function Tag({
  children,
  variant = "primary",
  style,
}: {
  children: React.ReactNode;
  variant?: "primary" | "muted";
  style?: React.CSSProperties;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-medium",
        !style &&
          (variant === "primary"
            ? "bg-primary/10 text-primary"
            : "bg-muted text-muted-foreground"),
      )}
      style={style}
    >
      {children}
    </span>
  );
}
