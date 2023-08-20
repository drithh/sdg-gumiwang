import CheckboxFilter from "~/components/table/checkbox-filter";

import BooleanCellRenderer from "~/components/table/boolean-cell";

const TextFilterParams = {
  filterOptions: [
    "Berisi",
    "Dimulai Dengan",
    "Diakhiri Dengan",
    "Sama Dengan",
    "Tidak Sama Dengan",
  ],
  maxNumConditions: 1,
};

const NumberFilterParams = {
  filterOptions: [
    "Sama Dengan",
    "Tidak Sama Dengan",
    "Lebih Besar Dari",
    "Lebih Besar Dari Atau Sama Dengan",
    "Kurang Dari",
    "Kurang Dari Atau Sama Dengan",
  ],
  maxNumConditions: 1,
};

export const columns = [
  {
    headerName: "Deskripsi Individu",
    children: [
      {
        headerName: "Nomor Induk Kependudukan",
        field: "nomorIndukKependudukan",
        filter: "agTextColumnFilter",
        filterParams: TextFilterParams,
      },
      {
        headerName: "Nomor Kartu Keluarga",
        field: "nomorKartuKeluarga",
        filter: "agTextColumnFilter",
        filterParams: TextFilterParams,
      },
      {
        headerName: "Nama",
        field: "nama",
        filter: "agTextColumnFilter",
        filterParams: TextFilterParams,
      },
      {
        headerName: "Jenis Kelamin",
        field: "jenisKelamin",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Laki-laki", "Perempuan"],
        },
      },
      {
        headerName: "Tempat Lahir",
        field: "tempatLahir",
        filter: "agTextColumnFilter",
        filterParams: TextFilterParams,
      },
      {
        headerName: "Tanggal Lahir",
        field: "tanggalLahir",
        filter: "agDateColumnFilter",
        filterParams: NumberFilterParams,
      },
      {
        headerName: "Status Pernikahan",
        field: "statusPernikahan",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Kawin", "Tidak kawin", "Duda/janda"],
        },
      },
      {
        headerName: "Agama",
        field: "agama",
        filter: CheckboxFilter,
        filterParams: {
          values: [
            "Islam",
            "Kristen",
            "Katolik",
            "Hindu",
            "Budha",
            "Konghucu",
            "Lainnya",
          ],
        },
      },
      {
        headerName: "Suku Bangsa",
        field: "sukuBangsa",
        filter: "agTextColumnFilter",
        filterParams: TextFilterParams,
      },
      {
        headerName: "Warga Negara",
        field: "wargaNegara",
        filter: CheckboxFilter,
        filterParams: {
          values: ["WNI", "WNA"],
        },
      },
      {
        headerName: "Nomor Handphone",
        field: "nomorHp",
        filter: "agTextColumnFilter",
        filterParams: TextFilterParams,
      },
      {
        headerName: "Nomor Whatsapp",
        field: "nomorWhatsapp",
        filter: "agTextColumnFilter",
        filterParams: TextFilterParams,
      },
      {
        headerName: "Email",
        field: "email",
        filter: "agTextColumnFilter",
        filterParams: TextFilterParams,
      },
      {
        headerName: "Facebook",
        field: "facebook",
        filter: "agTextColumnFilter",
        filterParams: TextFilterParams,
      },
      {
        headerName: "Twitter",
        field: "twitter",
        filter: "agTextColumnFilter",
        filterParams: TextFilterParams,
      },
      {
        headerName: "Instagram",
        field: "instagram",
        filter: "agTextColumnFilter",
        filterParams: TextFilterParams,
      },
    ],
  },
  {
    headerName: "Deskripsi Pekerjaan",
    children: [
      {
        headerName: "Kondisi Pekerjaan",
        field: "pekerjaan.kondisiPekerjaan",
        filter: CheckboxFilter,
        filterParams: {
          values: [
            "bersekolah",
            "Ibu rumah tangga",
            "Tidak bekerja",
            "Sedang mencari pekerjaan",
            "bekerja",
          ],
        },
      },
      {
        headerName: "Pekerjaan Utama",
        field: "pekerjaan.pekerjaanUtama",
        filter: CheckboxFilter,
        filterParams: {
          values: [
            "Petani pemilik lahan",
            "Petani penyewa",
            "Buruh tani",
            "Nelayan pemilik kapal/perahu",
            "Nelayan penyewa perahu/kapal",
            "Buruh nelayan",
            "Guru",
            "Guru agama",
            "Pedagang",
            "Pengolahan/industri",
            "PNS",
            "TNI",
            "Perangkat desa",
            "Pegawai kantor desa",
            "TKI",
            "Lainnya",
          ],
        },
      },
      {
        headerName: "Jaminan Sosial Ketenagakerjaan",
        field: "pekerjaan.jaminanSosialKetenagakerjaan",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Peserta", "Bukan peserta"],
        },
      },
    ],
  },

  {
    headerName: "Deskripsi Kesehatan",
    children: [
      {
        headerName: "Muntaber",
        field: "kesehatan.muntaber",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Demam Berdarah",
        field: "kesehatan.demamBerdarah",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Campak",
        field: "kesehatan.campak",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Malaria",
        field: "kesehatan.malaria",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Flu Burung",
        field: "kesehatan.fluBurung",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Covid-19",
        field: "kesehatan.covid19",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Hepatitis B",
        field: "kesehatan.hepatitisB",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Hepatitis E",
        field: "kesehatan.hepatitisE",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Difteri",
        field: "kesehatan.difteri",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Chikungunya",
        field: "kesehatan.chikungunya",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Leptospirosis",
        field: "kesehatan.leptospirosis",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Kolera",
        field: "kesehatan.kolera",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Gizi Buruk",
        field: "kesehatan.giziBuruk",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Jantung",
        field: "kesehatan.jantung",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "TBC Paru-Paru",
        field: "kesehatan.tbcParuParu",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Kanker",
        field: "kesehatan.kanker",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Diabetes",
        field: "kesehatan.diabetes",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Lumpuh",
        field: "kesehatan.lumpuh",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Lainnya",
        field: "kesehatan.lainnya",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Rumah Sakit",
        field: "kesehatan.rumahSakit",
        filter: "agNumberColumnFilter",
        filterParams: NumberFilterParams,
      },
      {
        headerName: "Rumah Sakit Bersalin",
        field: "kesehatan.rumahSakitBersalin",
        filter: "agNumberColumnFilter",
        filterParams: NumberFilterParams,
      },
      {
        headerName: "Puskesmas Rawat Inap",
        field: "kesehatan.puskesmasRawatInap",
        filter: "agNumberColumnFilter",
        filterParams: NumberFilterParams,
      },
      {
        headerName: "Puskesmas Tanpa Rawat Inap",
        field: "kesehatan.puskesmasTanpaRawatInap",
        filter: "agNumberColumnFilter",
        filterParams: NumberFilterParams,
      },
      {
        headerName: "Puskesmas Pembantu",
        field: "kesehatan.puskesmasPembantu",
        filter: "agNumberColumnFilter",
        filterParams: NumberFilterParams,
      },
      {
        headerName: "Poliklinik",
        field: "kesehatan.poliklinik",
        filter: "agNumberColumnFilter",
        filterParams: NumberFilterParams,
      },
      {
        headerName: "Tempat Praktek Dokter",
        field: "kesehatan.tempatPraktekDokter",
        filter: "agNumberColumnFilter",
        filterParams: NumberFilterParams,
      },
      {
        headerName: "Rumah Bersalin",
        field: "kesehatan.rumahBersalin",
        filter: "agNumberColumnFilter",
        filterParams: NumberFilterParams,
      },
      {
        headerName: "Tempat Praktek Bidan",
        field: "kesehatan.tempatPraktekBidan",
        filter: "agNumberColumnFilter",
        filterParams: NumberFilterParams,
      },
      {
        headerName: "Poskesdes",
        field: "kesehatan.poskesdes",
        filter: "agNumberColumnFilter",
        filterParams: NumberFilterParams,
      },
      {
        headerName: "Polindes",
        field: "kesehatan.polindes",
        filter: "agNumberColumnFilter",
        filterParams: NumberFilterParams,
      },
      {
        headerName: "Apotek",
        field: "kesehatan.apotek",
        filter: "agNumberColumnFilter",
        filterParams: NumberFilterParams,
      },
      {
        headerName: "Toko Khusus Obat",
        field: "kesehatan.tokoKhususObat",
        filter: "agNumberColumnFilter",
        filterParams: NumberFilterParams,
      },
      {
        headerName: "Posyandu",
        field: "kesehatan.posyandu",
        filter: "agNumberColumnFilter",
        filterParams: NumberFilterParams,
      },
      {
        headerName: "Posbindu",
        field: "kesehatan.posbindu",
        filter: "agNumberColumnFilter",
        filterParams: NumberFilterParams,
      },
      {
        headerName: "Tempat Praktek Dukun Bayi",
        field: "kesehatan.tempatPraktekDukunBayi",
        filter: "agNumberColumnFilter",
        filterParams: NumberFilterParams,
      },
      {
        headerName: "Jaminan Sosial Kesehatan",
        field: "kesehatan.jaminanSosialKesehatan",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Tunanetra",
        field: "kesehatan.tunanetra",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Tunarungu",
        field: "kesehatan.tunarungu",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Tunawicara",
        field: "kesehatan.tunawicara",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Tunarungu Wicara",
        field: "kesehatan.tunarunguWicara",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Tunadaksa",
        field: "kesehatan.tunadaksa",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Tunagrahita",
        field: "kesehatan.tunagrahita",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Tunalaras",
        field: "kesehatan.tunalaras",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Cacat Kusta",
        field: "kesehatan.cacatKusta",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Cacat Ganda",
        field: "kesehatan.cacatGanda",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Dipasung",
        field: "kesehatan.dipasung",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
    ],
  },
  {
    headerName: "Deskripsi Pendidikan",
    children: [
      {
        headerName: "Pendidikan Tertinggi",
        field: "pendidikan.pendidikanTertinggi",
        filter: CheckboxFilter,
        filterParams: {
          values: [
            "Tidak sekolah",
            "SD dan sederajat",
            "SMP dan sederajat",
            "SMA dan sederajat",
            "Diploma 1-3",
            "S1 dan sederajat",
            "S2 dan sederajat",
            "S3 dan sederajat",
            "Pesantren, seminari, wihara, dan sejenisnya",
            "Lainnya",
          ],
        },
      },
      {
        headerName: "Bahasa di Rumah",
        field: "pendidikan.bahasaDiRumah",
        filter: "agTextColumnFilter",
        filterParams: TextFilterParams,
      },
      {
        headerName: "Bahasa Formal",
        field: "pendidikan.bahasaFormal",
        filter: "agTextColumnFilter",
        filterParams: TextFilterParams,
      },
      {
        headerName: "Kerja Bakti",
        field: "pendidikan.kerjaBakti",
        filter: "agNumberColumnFilter",
        filterParams: NumberFilterParams,
      },
      {
        headerName: "Siskamling",
        field: "pendidikan.siskamling",
        filter: "agNumberColumnFilter",
        filterParams: NumberFilterParams,
      },
      {
        headerName: "Pesta Rakyat",
        field: "pendidikan.pestaRakyat",
        filter: "agNumberColumnFilter",
        filterParams: NumberFilterParams,
      },
      {
        headerName: "Menolong Warga Mengalami Kematian",
        field: "pendidikan.menolongWargaMengalamiKematian",
        filter: "agNumberColumnFilter",
        filterParams: NumberFilterParams,
      },
      {
        headerName: "Menolong Warga Sedang Sakit",
        field: "pendidikan.menolongWargaSedangSakit",
        filter: "agNumberColumnFilter",
        filterParams: NumberFilterParams,
      },
      {
        headerName: "Menolong Warga Kecelakaan",
        field: "pendidikan.menolongWargaKecelakaan",
        filter: "agNumberColumnFilter",
        filterParams: NumberFilterParams,
      },
    ],
  },
];
