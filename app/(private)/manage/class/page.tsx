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
import { Get, Post } from "@/lib/request";
import React, { ReactNode } from "react";
import { EditDialog } from "./EditDialog";
import { CreateClassDialog } from "./CreateDialog";
import DeleteDialog from "@/components/shared/DeleteDialog";

export default async function ClassPage() {
  const tableData = await Get(`/api/class`);
  const rows = tableData.map((cl: any) => {
    return (
      <tr key={cl.id}>
        <td className="border-2 border-black px-2 py-1">{cl.id}</td>
        <td className="border-2 border-black px-2 py-1">
          <div className="flex gap-2">
            <EditDialog data={cl.id}></EditDialog>
            <DeleteDialog id={cl.id} object="class"></DeleteDialog>
          </div>
        </td>
      </tr>
    );
  });
  return (
    <div className="">
      <div className="font-bold text-2xl">Class</div>
      <table>
        <thead>
          <tr>
            <td className="border-2 border-black px-2 py-1 font-bold">Class</td>
            <td className="border-2 border-black px-2 py-1 font-bold">
              Action
            </td>
          </tr>
        </thead>
        <tbody>{rows.map((row: any) => row)}</tbody>
      </table>
      {/* <CreateClassDialog data={}>Create class</CreateClassDialog> */}
    </div>
  );
}
