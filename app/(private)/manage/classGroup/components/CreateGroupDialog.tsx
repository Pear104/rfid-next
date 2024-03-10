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

import { Button } from "@/components/ui/button";
import React, { ReactNode, useState } from "react";
import { Post } from "@/lib/request";
import { useRouter } from "next/navigation";
import { CreateGroupForm } from "./CreateGroupForm";

export function CreateGroupDialog({
  children,
  data,
  object,
  classIds,
  subjectIds,
  lecturerIds,
}: {
  children: ReactNode | string;
  data: any[];
  object: string;
  classIds: string[];
  subjectIds: string[];
  lecturerIds: string[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="">
        <Button className="mt-4">{children}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create {object}</DialogTitle>
        </DialogHeader>
        <CreateGroupForm
          classIds={classIds}
          lecturerIds={lecturerIds}
          subjectIds={subjectIds}
          setOpen={setOpen}
        />
      </DialogContent>
    </Dialog>
  );
}
