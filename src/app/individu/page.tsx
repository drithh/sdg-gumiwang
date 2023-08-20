"use client";
import { AgGridReact } from "ag-grid-react";
import { GridOptions, IDatasource } from "ag-grid-community";
import { api } from "~/trpc/client";
import { useState } from "react";

import { columns } from "./columns";
import { useTheme } from "next-themes";
import { cn } from "~/lib/utils";

export default function DemoPage() {
  const [gridApi, setGridApi] = useState<GridOptions | null>(null);

  const datasource: IDatasource = {
    getRows(params) {
      const { startRow, endRow, filterModel, sortModel } = params;
      console.log("params", params);
      api.rumahTangga.getKeluarga
        .query({
          startRow,
          endRow,
          filterModel,
          sortModel,
        })
        .then((response) => {
          params.successCallback(response, 499);
        })
        .catch((error) => {
          console.error(error);
          params.failCallback();
        });
    },
  };

  const onGridReady = (gridOptions: GridOptions) => {
    setGridApi(gridOptions);
    gridOptions?.api?.setDatasource(datasource);
  };
  const { resolvedTheme } = useTheme();
  return (
    <div className="">
      <div
        className={cn(
          resolvedTheme === "light"
            ? "ag-theme-alpine"
            : "ag-theme-alpine-dark",
          "h-[calc(100vh-73px)]",
        )}
      >
        <AgGridReact
          columnDefs={columns}
          rowSelection="single"
          // pagination={true}
          // paginationPageSize={8}
          rowModelType="infinite"
          onGridReady={onGridReady}
          // components={components}
          defaultColDef={{ filter: true, floatingFilter: true, sortable: true }}
        />
      </div>
    </div>
  );
}
