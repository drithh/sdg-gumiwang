import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/trpc";
import { z } from "zod";
import {
  TransformedFilterInfo,
  filterPropertySchema,
  getNumberFilterType,
  getTextilterType,
  transformFilterModel,
} from "~/lib/filter";

export const individuRouter = createTRPCRouter({
  getIndividu: publicProcedure
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
        if (
          colType === "pendidikan" ||
          colType === "kesehatan" ||
          colType === "pekerjaan"
        ) {
        }
        if (!sort.colId.includes(".")) {
          return { ...acc, [sort.colId]: sort.sort };
        }
        return { ...acc, [colType]: { [colProp]: sort.sort } };
      }, {});

      console.log(input.filterModel);
      const filters = transformFilterModel(input.filterModel ?? {});

      function filterModelByType(type: string) {
        return filters
          .filter((filter) => filter.key.split(".")[0] === type)
          .map((filter) => ({ ...filter, key: filter.key.split(".")[1] }));
      }

      const filterModelPendidikan = filterModelByType("pendidikan");
      const filterModelKesehatan = filterModelByType("kesehatan");
      const filterModelPekerjaan = filterModelByType("pekerjaan");
      const filterModelIndividu = filters.filter(
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
        ...(filterModelIndividu.length > 0 &&
          processFilters(filterModelIndividu)),
        pendidikan: {
          ...(filterModelPendidikan.length > 0 &&
            processFilters(filterModelPendidikan)),
        },
        kesehatan: {
          ...(filterModelKesehatan.length > 0 &&
            processFilters(filterModelKesehatan)),
        },
        pekerjaan: {
          ...(filterModelPekerjaan.length > 0 &&
            processFilters(filterModelPekerjaan)),
        },
      };

      console.log(allWhere);
      const individu = await ctx.prisma.individu.findMany({
        skip: input.startRow,
        take: (input?.endRow ?? 0 - (input?.startRow ?? 0)) || 100,
        where: allWhere,

        orderBy: orderBy,
        include: {
          pendidikan: true,
          kesehatan: true,
          pekerjaan: true,
        },
      });
      console.log(individu.length);

      return individu;
    }),
});
