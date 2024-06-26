"use client";
import ClassMemberTable from "@/components/shared/ClassMemberTable";
import { useParams } from "next/navigation";
import React from "react";

export default function ClassPage() {
  const { id } = useParams();
  return <ClassMemberTable classInfoId={id + ""} />;
}
