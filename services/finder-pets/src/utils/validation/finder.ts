import { z } from "zod";

export const imageSchema = z.object({
  img_id: z.string(),
  url: z.string(),
});

export const petSchema = z.object({
  animal: z.string().optional(),
  kind: z.string().optional(),
  gender: z.string().optional(),
  weight: z.string().optional(),
  color: z.string().optional(),
  age: z.string().optional(),
  is_neutering: z.boolean().optional(),
  character: z.string().optional(),
});

export const finderPetSchema = petSchema.extend({
  category: z.string().optional(),
  date: z.string().optional(),
  area: z.string().optional(),
  zonecode: z.string().optional(),
  address: z.string().optional(),
  detail_address: z.string().optional(),
  phone: z
    .string()
    .regex(/^01([0 | 1 | 6 | 7 | 8 | 9])-([0-9]{3,4})-([0-9]{4})$/, {
      message: "휴대폰 번호를 정확하게 입력해주세요. (- 포함)",
    })
    .optional(),
  description: z.string().optional(),
  pet_image: z.array(imageSchema).optional(),
});

export type FinderPetRegisterFormData = z.infer<typeof finderPetSchema>;
