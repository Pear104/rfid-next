"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function SelectFieldForm({
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
  return (
    <Select
      onValueChange={(e) => {
        console.log(e);
      }}
    >
      <SelectTrigger className="w-[160px]">
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
              <SelectItem key={i} value={i + ""}>
                {i}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
