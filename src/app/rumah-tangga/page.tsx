"use client";
import { useQuery } from "@tanstack/react-query";
import { AgGridReact } from "ag-grid-react";
import { IDatasource } from "ag-grid-community";
import { api } from "~/trpc/client";
import { useState } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export default function DemoPage() {
  const data = useQuery(["keluarga"], () =>
    api.rumahTangga.getKeluarga.query({}),
  );

  const [gridApi, setGridApi] = useState();

  const columns = [
    {
      headerName: "Athlete",
      field: "athlete",
      filter: "agTextColumnFilter",
    },
    { headerName: "Age", field: "age", filter: "agTextColumnFilter" },
    { headerName: "Country", field: "country", filter: "agTextColumnFilter" },
    { headerName: "Year", field: "year", filter: "agTextColumnFilter" },
    { headerName: "Date", field: "date", filter: "agTextColumnFilter" },
    { headerName: "Sport", field: "sport", filter: "agTextColumnFilter" },
    { headerName: "Gold", field: "gold", filter: "agTextColumnFilter" },
    { headerName: "Silver", field: "silver", filter: "agTextColumnFilter" },
    { headerName: "Bronze", field: "bronze", filter: "agTextColumnFilter" },
    { headerName: "Total", field: "total", filter: "agTextColumnFilter" },
  ];
  const datasource: IDatasource = {
    getRows(params) {
      console.log(JSON.stringify(params, null, 1));
      const { startRow, endRow, filterModel, sortModel } = params;
      let url = `http://localhost:3000/olympic?`;
      //Sorting
      if (sortModel.length) {
        const { colId, sort } = sortModel[0];
        url += `_sort=${colId}&_order=${sort}&`;
      }
      //Filtering
      const filterKeys = Object.keys(filterModel);
      filterKeys.forEach((filter) => {
        url += `${filter}=${filterModel[filter].filter}&`;
      });
      //Pagination
      url += `_start=${startRow}&_end=${endRow}`;
      fetch(url)
        .then((httpResponse) => httpResponse.json())
        .then((response) => {
          params.successCallback(response, 499);
        })
        .catch((error) => {
          console.error(error);
          params.failCallback();
        });
    },
  };

  const onGridReady = (params: any) => {
    setGridApi(params);
    console.log(params);
    // register datasource with the grid
    params.api.setDatasource(datasource);
  };

  return (
    <div>
      <h1>React-App</h1>
      <h4>Implement Infinite Scroll in ag Grid</h4>
      <div className="ag-theme-alpine" style={{ height: 400 }}>
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
