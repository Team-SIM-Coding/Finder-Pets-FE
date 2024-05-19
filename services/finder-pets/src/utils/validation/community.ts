import { z } from "zod";

export const imageSchema = z.object({
  img_id: z.string(),
  url: z.string(),
});

export const communityBoardSchema = z.object({
  category: z.string().optional(),
  area: z.string().optional(),
  district: z.string().optional(),
  animal: z.string().optional(),
  kind: z.string().optional(),
  gender: z.string().optional(),
  weight: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  images: z.array(imageSchema).optional(),
});

export type CommunityBoardRegisterFormData = z.infer<typeof communityBoardSchema>;
