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
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PencilLine } from "lucide-react";

export function EditDialog({ data }: { data: any }) {
  const handleCreate = async (formData: FormData) => {
    "use server";
    const rawFormData = {
      id: data,
      newId: formData.get("id"),
    };
    const status = (
      await Patch(
        process.env.NEXT_PUBLIC_VERCEL_URL + "/api/class",
        rawFormData
      )
    ).ok;
    console.log(status);
    redirect("/manage/class");
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
          <DialogTitle>Edit class #{data}</DialogTitle>
        </DialogHeader>
        <form action={handleCreate}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="classId" className="text-right">
                Class ID
              </Label>
              <Input name="id" defaultValue={data} className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              Save changes
              {/* <Button type="submit">Save changes</Button> */}
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
