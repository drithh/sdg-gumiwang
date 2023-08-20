"use client";
import { useQuery } from "@tanstack/react-query";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { api } from "~/trpc/client";

export default function DemoPage() {
  const data = useQuery(["keluarga"], () =>
    api.rumahTangga.getKeluarga.query({}),
  );
  console.log(data.data);
  return <div className="container mx-auto py-10"></div>;
}
