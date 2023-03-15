import * as Radix from "@radix-ui/react-select";

interface OptionProps {
  value: string;
  children: string;
}

export default function Option({ value, children }: OptionProps) {
  return (
    <Radix.Item
      value={value}
      className="relative flex h-9 cursor-default select-none items-center rounded px-4 text-sm outline-none focus-visible:bg-neutral-100"
    >
      <Radix.ItemText asChild>
        <span className="block truncate">{children}</span>
      </Radix.ItemText>
    </Radix.Item>
  );
}
