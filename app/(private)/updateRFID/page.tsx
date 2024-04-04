"use server";
import { Get, Post } from "@/lib/request";
import React from "react";
import { handleSubmitForm } from "@/action/updateRFID";
export default async function UpdateRFID() {
  const data = await Get("/api/updateRFID");
  return (
    !data.isUpdated && (
      <div className="">
        <div className="mb-4 gap-4">
          <div className="mb-2">A new UID ({data.uid}) has just registered</div>
          <form
            action={handleSubmitForm}
            className="flex flex-col w-[300px] gap-4"
          >
            <input name="uid" type="hidden" value={data.uid} />
            <input
              placeholder="Student name"
              name="name"
              className="border rounded-md p-2"
            />
            <input
              placeholder="Student id number"
              name="id"
              className="border rounded-md p-2"
            />
            <button
              type="submit"
              className="w-[200px] inline-block text-white rounded-md font-bold px-4 py-2 bg-blue-500 cursor-pointer active:bg-blue-600"
            >
              Add to database
            </button>
          </form>
        </div>
      </div>
    )
  );
}
