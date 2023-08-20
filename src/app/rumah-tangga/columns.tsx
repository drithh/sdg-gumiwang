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
    headerName: "Deskripsi Keluarga",
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
    ],
  },
  {
    headerName: "Permukiman",
    children: [
      {
        headerName: "Tempat Tinggal",
        field: "permukiman.tempatTinggal",
        filter: CheckboxFilter,
        filterParams: {
          values: [
            "Milik Sendiri",
            "Kontrak/Sewa",
            "Bebas Sewa",
            "Dipinjami",
            "Dinas",
            "Lainnya",
          ],
        },
      },
      {
        headerName: "Status Lahan Tempat Tinggal",
        field: "permukiman.statusLahanTempatTinggal",
        filter: CheckboxFilter,
        filterParams: {
          values: [
            "Milik Sendiri",
            "Milik Orang Tua",
            "Tanah Negara",
            "Lainnya",
          ],
        },
      },
      {
        headerName: "Luas Lantai",
        field: "permukiman.luasLantai",
        filter: "agNumberColumnFilter",
        filterParams: NumberFilterParams,
      },
      {
        headerName: "Luas Lahan",
        field: "permukiman.luasLahan",
        filter: "agNumberColumnFilter",
        filterParams: NumberFilterParams,
      },
      {
        headerName: "Jenis Lantai",
        field: "permukiman.jenisLantai",
        filter: CheckboxFilter,
        filterParams: {
          values: [
            "Marmer/granit",
            "Keramik",
            "Parket/vinil/permadani",
            "Ubin/tegel/teraso",
            "Kayu/papan kualitas tinggi",
            "Semen/ bata merah",
            "Bambu",
            "Kayu/papan kualitas rendah",
            "Lainnya",
          ],
        },
      },
      {
        headerName: "Dinding",
        field: "permukiman.dinding",
        filter: CheckboxFilter,
        filterParams: {
          values: [
            "Semen/beton/kayu berkualitas tinggi",
            "Kayu berkualitas rendah/bamboo",
            "Lainnya",
          ],
        },
      },
      {
        headerName: "Jendela",
        field: "permukiman.jendela",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ada, berfungsi", "Ada, tidak berfungsi", "Tidak ada"],
        },
      },
      {
        headerName: "Atap",
        field: "permukiman.atap",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Genteng", "Kayu/Jerami", "Lainnya"],
        },
      },
      {
        headerName: "Penerangan",
        field: "permukiman.penerangan",
        filter: CheckboxFilter,
        filterParams: {
          values: [
            "Listrik PLN",
            "Listrik non PLN",
            "Lampu minyak/lilin",
            "Sumber penenerangan lainnya",
            "Tidak ada",
          ],
        },
      },
      {
        headerName: "Energi Memasak",
        field: "permukiman.energiMemasak",
        filter: CheckboxFilter,
        filterParams: {
          values: [
            "Gas kota/LPG/biogas",
            "Minyak tanah/batu bara",
            "Kayu bakar",
            "Lainnya",
          ],
        },
      },
      {
        headerName: "Sumber Kayu Bakar",
        field: "permukiman.sumberKayuBakar",
        filter: CheckboxFilter,
        filterParams: {
          values: [
            "Pembelian",
            "Diambil dari hutan",
            "Diambil di luar/bukan hutan",
            "Lainnya",
          ],
        },
      },
      {
        headerName: "Tempat Pembuangan Sampah",
        field: "permukiman.tempatPembuanganSampah",
        filter: CheckboxFilter,
        filterParams: {
          values: [
            "Tidak ada",
            "Di kebun/sungai/drainase",
            "Dibakar",
            "Tempat sampah",
            "Tempat sampah diangkut reguler",
          ],
        },
      },
      {
        headerName: "Fasilitas MCK",
        field: "permukiman.fasilitasMCK",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Sendiri", "Berkelompok", "MCK Umum", "Tidak ada"],
        },
      },
      {
        headerName: "Sumber Air Mandi",
        field: "permukiman.sumberAirMandi",
        filter: CheckboxFilter,
        filterParams: {
          values: [
            "Ledeng/perpipaan berbayar/air isi ulang/kemasan",
            "Perpipaan",
            "Mata air/sumur",
            "Sungai, danau, embung",
            "Tadah air hujan",
            "Lainnya",
          ],
        },
      },
      {
        headerName: "Fasilitas Buang Air Besar",
        field: "permukiman.fasilitasBuangAirBesar",
        filter: CheckboxFilter,
        filterParams: {
          values: [
            "Jamban sendiri",
            "Jamban bersama/tetangga",
            "Jamban umum",
            "Lainnya",
          ],
        },
      },
      {
        headerName: "Sumber Air Minum",
        field: "permukiman.sumberAirMinum",
        filter: CheckboxFilter,
        filterParams: {
          values: [
            "Ledeng/perpipaan berbayar/air isi ulang/kemasan",
            "Perpipaan",
            "Mata air/sumur",
            "Sungai, danau, embung",
            "Tadah air hujan",
            "Lainnya",
          ],
        },
      },
      {
        headerName: "Tempat Pembuangan Limbah Cair",
        field: "permukiman.tempatPembuanganLimbahCair",
        filter: CheckboxFilter,
        filterParams: {
          values: [
            "tangki/instalasi pengolahan limbah",
            "sawah/kolam/sungai/drainase/laut",
            "lubang di tanah",
            "Lainnya",
          ],
        },
      },
      {
        headerName: "Rumah Berada Dibawah Sutet/Sutt/Suttas",
        field: "permukiman.rumahBeradaDibawahSutetSuttSuttas",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Rumah Di Bantaran Sungai",
        field: "permukiman.rumahDiBantaranSungai",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Rumah Di Lereng Gunung",
        field: "permukiman.rumahDiLerengGunung",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Kondisi Rumah",
        field: "permukiman.kondisiRumah",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Kumuh", "Tidak Kumuh"],
        },
      },
      {
        headerName: "BLT Dana Desa",
        field: "permukiman.bltDanaDesa",

        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
        floatingFilter: true,
      },
      {
        headerName: "Program Keluarga Harapan",
        field: "permukiman.programKeluargaHarapan",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Bantuan Sosial Tunai",
        field: "permukiman.bantuanSosialTunai",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Bantuan Presiden",
        field: "permukiman.bantuanPresiden",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Bantuan UMKM",
        field: "permukiman.bantuanUmkm",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Bantuan Untuk Pekerja",
        field: "permukiman.bantuanUntukPekerja",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Bantuan Pendidikan Anak",
        field: "permukiman.bantuanPendidikanAnak",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
      {
        headerName: "Lainnya",
        field: "permukiman.lainnya",
        filter: CheckboxFilter,
        filterParams: {
          values: ["Ya", "Tidak"],
        },
      },
    ],
  },
];
