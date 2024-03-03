"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Delete } from "@/lib/request";
import { Trash2 } from "lucide-react";

import React from "react";

export default function DeleteDialog({
  id,
  object,
}: {
  id: string;
  object: string;
}) {
  const handleDelete = async (id: string) => {
    await Delete(process.env.NEXT_PUBLIC_VERCEL_URL + `/api/${object}`, {
      id,
    });
    window.location.href = `${process.env.NEXT_PUBLIC_VERCEL_URL}/manage/${object}`;
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger className="bg-red-500 hover:bg-red-400 py-2 px-3 text-white rounded-sm">
        <Trash2 size={16} />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleDelete(id)}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
