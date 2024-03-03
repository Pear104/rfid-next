// "use server"

// const handleCreate = async (formData: FormData) => {
//     ("use server");
//     const rawFormData: any = {};
//     data
//       .map((item) => item.field)
//       .forEach((field: string) => (rawFormData[field] = formData.get(field)));
//     (
//       await Post(
//         process.env.NEXT_PUBLIC_VERCEL_URL + `/api/${object}`,
//         rawFormData
//       )
//     ).ok;
//     // redirect(`/manage/${object}`);
//     revalidatePath(`/manage/${object}`);
//   };
