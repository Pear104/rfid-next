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
export default function SelectFieldNav({
  label,
  items,
  valueField,
  textField,
}: {
  label: string;
  items: any[];
  valueField: string;
  textField: string;
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
          {items.map((i) => {
            return valueField ? (
              <SelectItem key={i[valueField]} value={i[valueField]}>
                {i[textField]}
              </SelectItem>
            ) : (
              <SelectItem key={i} value={i}>
                {i}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
