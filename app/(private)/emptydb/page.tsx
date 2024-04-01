"use client";
import { Post } from "@/lib/request";
import React from "react";

export default function EmptyDB() {
  const seedDb = async () => {
    await Post("/api/seed", "dummy");
  };

  return (
    <div className="flex gap-4">
      <div className="inline-block text-white rounded-md font-bold px-4 py-2 bg-blue-500 cursor-pointer active:bg-blue-600">
        Empty DB
      </div>
      <div
        onClick={seedDb}
        className="inline-block text-white rounded-md font-bold px-4 py-2 bg-blue-500 cursor-pointer active:bg-blue-600"
      >
        Seed DB
      </div>
    </div>
  );
}
