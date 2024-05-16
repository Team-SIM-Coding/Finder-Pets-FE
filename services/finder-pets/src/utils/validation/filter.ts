import { z } from "zod";

export const filterMenuSchema = z.object({
  area: z.string(),
  district: z.string(),
  animal: z.string(),
  kind: z.string(),
});

export type FilterMenuFormData = z.infer<typeof filterMenuSchema>;
