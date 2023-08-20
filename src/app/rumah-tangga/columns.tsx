"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export interface Keluarga extends Lokasi {
  id: string;
  nomorKartuKeluarga: string;
  nomorIndukKependudukan: string;
}

export type Lokasi = {
  provinsi: string;
  kabupatenKota: string;
  kecamatan: string;
  desaKelurahan: string;
  rt: string;
  rw: string;
  nama: string;
  alamat: string;
  nomorHp?: string;
  nomorRumah?: string;
};

export const columns: ColumnDef<Keluarga>[] = [
  {
    header: "Keluarga",
    columns: [
      {
        accessorKey: "nomorKartuKeluarga",
        header: "Nomor Kartu Keluarga",
      },
      {
        accessorKey: "nomorIndukKependudukan",
        header: "Nomor Induk Kependudukan",
      },
    ],
  },
];
