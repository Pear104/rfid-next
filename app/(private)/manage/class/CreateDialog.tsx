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

import { Button } from "@/components/ui/button";
import { Post } from "@/lib/request";
import React, { ReactNode } from "react";
import { redirect } from "next/navigation";

export function CreateClassDialog({
  children,
  data,
  object,
}: {
  children: ReactNode | string;
  data: any[];
  object: string;
}) {
  const handleCreate = async (formData: FormData) => {
    "use server";

    let rawFormData: any = {
      id: formData.get("id"),
    };
    await Post(
      process.env.NEXT_PUBLIC_VERCEL_URL + `/api/${object}`,
      rawFormData
    );
    redirect(`/manage/${object}`);
  };
  return (
    <Dialog>
      <DialogTrigger asChild className="">
        <Button className="mt-4">{children}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create class</DialogTitle>
        </DialogHeader>
        <form action={handleCreate}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="classId" className="text-right">
                Class ID
              </Label>
              <Input name="id" id="classId" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Create</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
