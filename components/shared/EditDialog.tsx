"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ReactNode } from "react";
import { Patch } from "@/lib/request";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PencilLine } from "lucide-react";

export function EditDialog({
  data,
  object,
  id,
}: {
  data: any[];
  object: string;
  id: string;
}) {
  const router = useRouter();

  const handleEdit = async (formData: FormData) => {
    ("use server");
    console.log(formData);
    const rawFormData: any = {
      id: id,
    };
    data
      .map((item) => item.field)
      .forEach((field: string) => {
        if (field == "id") {
          rawFormData["newId"] = formData.get("newId");
        } else {
          rawFormData[field] = formData.get(field);
        }
      });
    console.log(rawFormData);
    await Patch(
      process.env.NEXT_PUBLIC_VERCEL_URL + `/api/${object}`,
      rawFormData
    );
  };
  return (
    <Dialog>
      <DialogTrigger asChild className="">
        <Button className="bg-blue-500 hover:bg-blue-400 py-2 px-3">
          <PencilLine size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit</DialogTitle>
        </DialogHeader>
        <form
          action={async (FormData) => {
            await handleEdit(FormData);
            router.refresh();
          }}
        >
          <div className="grid gap-4 py-4">
            {data.map((item: any) => {
              return (
                <div
                  className="grid grid-cols-4 items-center gap-4"
                  key={item.field}
                >
                  <Label className="text-left">{item.text}</Label>
                  <Input
                    name={item.field == "id" ? "newId" : item.field}
                    defaultValue={item.value}
                    className="col-span-3"
                  />
                </div>
              );
            })}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              {/* Save changes */}
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
