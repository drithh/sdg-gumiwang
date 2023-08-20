import { createTRPCRouter, protectedProcedure } from "~/server/trpc";
import { z } from "zod";
import {
  TransformedFilterInfo,
  filterPropertySchema,
  getNumberFilterType,
  getTextilterType,
  transformFilterModel,
} from "~/lib/filter";

export const rumahTanggaRouter = createTRPCRouter({
  getKeluarga: protectedProcedure
    .input(
      z.object({
        startRow: z.number().optional(),
        endRow: z.number().optional(),
        sortModel: z
          .array(
            z.object({
              sort: z.string(),
              colId: z.string(),
            }),
          )
          .optional(),
        filterModel: z.record(filterPropertySchema).optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const orderBy = input.sortModel?.reduce((acc, sort) => {
        const [colType, colProp] = sort.colId.split(".");
        if (!sort.colId.includes(".")) {
          return { ...acc, [sort.colId]: sort.sort };
        }
        return { ...acc, [colType]: { [colProp]: sort.sort } };
      }, {});

      const filters = transformFilterModel(input.filterModel ?? {});

      function filterModelByType(type: string) {
        return filters
          .filter((filter) => filter.key.split(".")[0] === type)
          .map((filter) => ({ ...filter, key: filter.key.split(".")[1] }));
      }

      const filterModelPermukiman = filterModelByType("permukiman");
      const filterModelLokasi = filterModelByType("lokasi");
      const filterModelKeluarga = filters.filter(
        (filter) => !filter.key.includes("."),
      );

      const processFilters = (filters: TransformedFilterInfo[]) => {
        const result: Record<string, Record<string, string | string[]>> = {};
        filters.forEach((filter) => {
          switch (filter.filterType) {
            case "text":
              result[filter.key] = {
                [getTextilterType(filter.type)]: filter.filter as string,
              };
              break;
            case "number":
              result[filter.key] = {
                [getNumberFilterType(filter.type)]: filter.filter.toString(),
              };
              break;
            case "checkbox":
              result[filter.key] = {
                in: filter.filter as string[],
              };
            default:
              break;
          }
        });
        return result;
      };

      const allWhere = {
        ...(filterModelKeluarga.length > 0 &&
          processFilters(filterModelKeluarga)),
        permukiman: {
          ...(filterModelPermukiman.length > 0 &&
            processFilters(filterModelPermukiman)),
        },
        lokasi: {
          ...(filterModelLokasi.length > 0 &&
            processFilters(filterModelLokasi)),
        },
      };

      console.log(allWhere);
      const keluarga = await ctx.prisma.keluarga.findMany({
        skip: input.startRow,
        take: (input?.endRow ?? 0 - (input?.startRow ?? 0)) || 100,
        where: allWhere,

        orderBy: orderBy,
        include: {
          lokasi: true,
          permukiman: true,
        },
      });
      console.log(keluarga.length);

      return keluarga;
    }),
});
