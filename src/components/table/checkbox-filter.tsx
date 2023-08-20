import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import {
  IFilterComp,
  IDoesFilterPassParams,
  IFilterParams,
} from "ag-grid-community";
import { cn } from "~/lib/utils";

interface CustomFilterValue extends IFilterParams {
  values: string[];
}

const Filter = forwardRef((props: CustomFilterValue, ref: any) => {
  const [filterState, setFilterState] = useState<string[]>(props.values);

  useImperativeHandle(ref, () => {
    return {
      isFilterActive() {
        return filterState.length > 0;
      },
      doesFilterPass(params: IDoesFilterPassParams) {
        const field = props.colDef.field ?? "";
        return params.data[field] == filterState;
      },
      getModel() {
        if (filterState.length == 0) {
          return undefined;
        }
        return {
          filterType: "checkbox",
          filter: filterState,
          type: "equals",
        };
      },
      setModel(model: any) {
        if (model == null) {
          setFilterState([]);
        } else {
          setFilterState(model.state);
        }
      },
      getModelAsString() {
        const isAllSelected = filterState.length === props.values.length;
        return isAllSelected || filterState.length === 0
          ? ""
          : `(${filterState.length}) ${filterState.join(",")}}`;
      },
      // onNewRowsLoaded() {},
      // onAnyFilterChanged() {},
      // afterGuiAttached() {},
    };
  });

  useEffect(() => props.filterChangedCallback(), [filterState, props]);

  return (
    <div className="ag-filter-body-wrapper ag-simple-filter-body-wrapper">
      {props.values.map((value) => (
        <div key={value} className="m-0 flex gap-2">
          <div
            className={cn(
              "ag-wrapper ag-input-wrapper ag-checkbox-input-wrapper m-0",
              {
                "ag-checked": filterState.includes(value),
              },
            )}
          >
            <input
              type="checkbox"
              checked={filterState.includes(value)}
              onChange={() =>
                setFilterState((prev) =>
                  prev.includes(value)
                    ? prev.filter((item) => item !== value)
                    : [...prev, value],
                )
              }
              className="ag-input-field-input ag-checkbox-input m-0"
            />
          </div>
          <div className="ag-input-field-label ag-label ag-checkbox-label ag-label-ellipsis m-0">
            <div className="ag-react-container m-0">{value}</div>
          </div>
        </div>
      ))}
      <div className="ag-filter-apply-panel !p-0 !py-2">
        <button
          type="button"
          className="ag-button ag-standard-button ag-filter-apply-panel-button"
          onClick={() => setFilterState([])}
        >
          Kosongkan
        </button>
        <button
          type="button"
          className="ag-button ag-standard-button ag-filter-apply-panel-button"
          onClick={() => setFilterState(props.values)}
        >
          Pilih Semua
        </button>
      </div>
    </div>
  );
});
Filter.displayName = "CheckboxFilter";

export default Filter;
