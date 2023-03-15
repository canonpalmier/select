import * as Radix from "@radix-ui/react-select";

import ChevronDownIcon from "./ChevronDownIcon";
import ChevronUpIcon from "./ChevronUpIcon";

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
}

export default function Select({ value, onChange, children }: SelectProps) {
  return (
    <Radix.Root value={value} onValueChange={onChange}>
      <Radix.Trigger className="flex h-9 w-full cursor-default items-center justify-between gap-4 rounded-md border border-neutral-200 bg-white px-4 text-sm text-neutral-600 outline-none hover:border-neutral-300 focus-visible:border-orange-300 focus-visible:ring-2 focus-visible:ring-orange-100 active:bg-neutral-100">
        <span className="select-none truncate">
          <Radix.Value />
        </span>
        <Radix.Icon>
          <ChevronDownIcon />
        </Radix.Icon>
      </Radix.Trigger>
      <Radix.Portal>
        <Radix.Content className="z-30 max-w-xs rounded-md border border-neutral-200 bg-white p-1 shadow-lg">
          <Radix.ScrollUpButton className="flex h-4 items-center justify-center">
            <ChevronUpIcon />
          </Radix.ScrollUpButton>
          <Radix.Viewport>{children}</Radix.Viewport>
          <Radix.ScrollDownButton className="flex h-4 items-center justify-center">
            <ChevronDownIcon />
          </Radix.ScrollDownButton>
        </Radix.Content>
      </Radix.Portal>
    </Radix.Root>
  );
}
