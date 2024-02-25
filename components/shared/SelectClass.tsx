"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";
export default function SelectClass({
  label,
  items,
  field,
}: {
  label: string;
  items: any[];
  field: string;
}) {
  const { replace } = useRouter();
  const pathname = usePathname();

  return (
    <Select
      onValueChange={(e) => {
        const dest = pathname + "?class=" + e;
        replace(dest);
      }}
    >
      <SelectTrigger className="w-[100px]">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items.map((i) => (
            <SelectItem key={i[field]} value={i[field]}>
              {i[field]}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
