"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
export default function SelectField({
  label,
  items,
  field,
}: {
  label: string;
  items: any[];
  field: string;
}) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);

  return (
    <Select
      onValueChange={(e) => {
        params.set(label.toLowerCase(), e);
        replace(`${pathname}?${params.toString()}`);
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
