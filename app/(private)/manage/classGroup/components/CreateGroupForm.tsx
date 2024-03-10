"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Post } from "@/lib/request";
import { useRouter } from "next/navigation";

export function CreateGroupForm({
  classIds,
  subjectIds,
  lecturerIds,
  setOpen,
}: {
  classIds: any[];
  subjectIds: any[];
  lecturerIds: any[];
  setOpen: any;
}) {
  const router = useRouter();
  let formSchema = z.object({
    classId: z.string().refine((value) => {
      return classIds.map((item) => item.id).includes(value);
    }),
    subjectId: z.string().refine((value) => {
      return subjectIds.map((item) => item.id).includes(value);
    }),
    lecturerId: z.string().refine((value) => {
      return lecturerIds.map((item) => item.id).includes(value);
    }),
    slotOrder: z.enum(["1", "2", "3", "4"]),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      classId: classIds[0].id,
      subjectId: subjectIds[0].id,
      lecturerId: lecturerIds[0].id,
      slotOrder: "1",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const data = await Post(
      process.env.NEXT_PUBLIC_VERCEL_URL + `/api/classGroup`,
      values
    );
    console.log("create ok");
    console.log(data);

    setOpen(false);
    router.refresh();
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="classId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Class ID</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Class ID" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {classIds.map((classId) => (
                    <SelectItem key={classId.id} value={classId.id}>
                      {classId.id}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subjectId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject ID</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Subject ID" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {subjectIds.map((item) => (
                    <SelectItem key={item.id} value={item.id}>
                      {item.id}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lecturerId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lecturer ID</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Lecturer ID" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {lecturerIds.map((item) => (
                    <SelectItem key={item.id} value={item.id}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="slotOrder"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slot order</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Slot order" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem key={1} value="1">
                    1
                  </SelectItem>
                  <SelectItem key={2} value="2">
                    2
                  </SelectItem>
                  <SelectItem key={3} value="3">
                    3
                  </SelectItem>
                  <SelectItem key={4} value="4">
                    4
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
