"use client";
import { AgGridReact } from "ag-grid-react";
import { GridOptions, IDatasource } from "ag-grid-community";
import { api } from "~/trpc/client";
import { useState } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { columns } from "./columns";

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

  return (
    <div className="">
      <div className="ag-theme-alpine h-screen">
        <AgGridReact
          columnDefs={columns}
          // pagination={true}
          // paginationPageSize={8}
          // domLayout="autoHeight"
          rowModelType="infinite"
          onGridReady={onGridReady}
          // components={components}
          defaultColDef={{ filter: true, floatingFilter: true, sortable: true }}
        />
      </div>
    </div>
  );
}
