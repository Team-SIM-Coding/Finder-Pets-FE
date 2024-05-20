import { z } from "zod";

export const communityBoardSchema = z.object({
  category: z.string(),
  area: z.string().optional(),
  animal: z.string().optional(),
  kind: z.string().optional(),
  description: z.string().optional(),
  images: z.array(z.string().optional()),
});

export type CommunityBoardRegisterFormData = z.infer<typeof communityBoardSchema>;
