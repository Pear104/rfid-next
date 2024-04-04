import { db } from "@/lib/prisma";
import { revalidateTag } from "next/cache";

export const handleSubmitForm = async (formData: FormData) => {
  "use server";
  const rawFormData: any = {
    uid: formData.get("uid"),
    id: formData.get("id"),
    name: formData.get("name"),
  };
  await db.student.create({ data: rawFormData });
  await db.updateRFID.update({ where: { id: 1 }, data: { isUpdated: true } });
  revalidateTag("updateRFID");
};
