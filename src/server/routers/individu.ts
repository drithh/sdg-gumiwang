import { createTRPCRouter, protectedProcedure } from "~/server/trpc";
import { z } from "zod";
import {
  TransformedFilterInfo,
  filterPropertySchema,
  getNumberFilterType,
  getTextilterType,
  transformFilterModel,
} from "~/lib/filter";

export const individuRouter = createTRPCRouter({
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
      const sortModelPermukiman = input.sortModel?.find(
        (sort) => sort.colId.split(".")[0] === "permukiman",
      );
      const sortModelLokasi = input.sortModel?.find(
        (sort) => sort.colId.split(".")[0] === "lokasi",
      );
      const sortModelKeluarga = input.sortModel?.filter(
        (sort) =>
          sort.colId.split(".")[0] !== "permukiman" &&
          sort.colId.split(".")[0] !== "lokasi",
      )[0];

      const orderBy = {
        ...(sortModelPermukiman && {
          permukiman: {
            [sortModelPermukiman.colId.split(".")[1]]: sortModelPermukiman.sort,
          },
        }),
        ...(sortModelLokasi && {
          lokasi: {
            [sortModelLokasi.colId.split(".")[1]]: sortModelLokasi.sort,
          },
        }),
        ...(sortModelKeluarga && {
          [sortModelKeluarga.colId]: sortModelKeluarga.sort,
        }),
      };

      console.log(input.filterModel);
      const filters = transformFilterModel(input.filterModel ?? {});

      const filterModelPermukiman = filters
        .filter((filter) => filter.key.split(".")[0] === "permukiman")
        .map((filter) => ({
          ...filter,
          key: filter.key.split(".")[1],
        }));

      const filterModelLokasi = filters
        .filter((filter) => filter.key.split(".")[0] === "lokasi")
        .map((filter) => ({
          ...filter,
          key: filter.key.split(".")[1],
        }));

      const filterModelKeluarga = filters.filter(
        (filter) => !filter.key.includes("."),
      );
      console.log(filterModelPermukiman);

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
