import { z } from "zod";

export const getTextilterType = (filterType: string) => {
  switch (filterType) {
    case "Berisi":
      return "contains";
    case "Dimulai Dengan":
      return "startsWith";
    case "Diakhiri Dengan":
      return "endsWith";
    case "Sama Dengan":
      return "equals";
    case "Tidak Sama Dengan":
      return "not";
    default:
      return "contains";
  }
};

export const getNumberFilterType = (filterType: string) => {
  switch (filterType) {
    case "Sama Dengan":
      return "equals";
    case "Tidak Sama Dengan":
      return "not";
    case "Lebih Besar Dari":
      return "gt";
    case "Lebih Besar Dari Atau Sama Dengan":
      return "gte";
    case "Kurang Dari":
      return "lt";
    case "Kurang Dari Atau Sama Dengan":
      return "lte";
    default:
      return "equals";
  }
};

export const filterPropertySchema = z.object({
  filter: z.union([z.string(), z.array(z.string()), z.number()]),
  filterType: z.string(),
  type: z.string(),
});

export interface FilterData {
  filter: string | string[] | number;
  filterType: string;
  type: string;
}

export type FilterModel = {
  [key: string]: FilterData;
};

export interface TransformedFilterInfo {
  key: string;
  type: string;
  filterType: string;
  filter: string | string[] | number;
}

export function transformFilterModel(
  filterModel: FilterModel,
): TransformedFilterInfo[] {
  const transformedFilterInfoArray: TransformedFilterInfo[] = [];

  for (const key in filterModel) {
    if (filterModel.hasOwnProperty(key)) {
      const { filter, filterType, type } = filterModel[key];
      const transformedFilterInfo: TransformedFilterInfo = {
        key,
        type,
        filterType,
        filter,
      };
      transformedFilterInfoArray.push(transformedFilterInfo);
    }
  }

  return transformedFilterInfoArray;
}
