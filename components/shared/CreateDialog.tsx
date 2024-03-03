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

import { Button } from "@/components/ui/button";
import React, { ReactNode } from "react";
import { Post } from "@/lib/request";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export function CreateClassDialog({
  children,
  data,
  object,
}: {
  children: ReactNode | string;
  data: any[];
  object: string;
}) {
  const router = useRouter();
  const handleCreate = async (formData: FormData) => {
    ("use server");
    const rawFormData: any = {};
    data
      .map((item) => item.field)
      .forEach((field: string) => (rawFormData[field] = formData.get(field)));
    await Post(
      process.env.NEXT_PUBLIC_VERCEL_URL + `/api/${object}`,
      rawFormData
    );
  };
  return (
    <Dialog>
      <DialogTrigger asChild className="">
        <Button className="mt-4">{children}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create {object}</DialogTitle>
        </DialogHeader>
        <form
          action={async (FormData) => {
            await handleCreate(FormData);
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
                  <Input name={item.field} className="col-span-3" />
                </div>
              );
            })}
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
