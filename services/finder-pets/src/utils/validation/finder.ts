import { z } from "zod";

export const petSchema = z.object({
  pet_id: z.string().optional(),
  animal: z.string().optional(),
  kind: z.string().optional(),
  gender: z.string().optional(),
  weight: z.string().optional(),
  color: z.string().optional(),
  age: z.string().optional(),
  is_neutering: z.boolean().optional(),
  character: z.string().optional(),
});

export const lostPetSchema = petSchema.extend({
  category: z.string(),
  lost_pet_id: z.string().optional(),
  date: z.string().optional(),
  place: z.string().optional(),
  latitude: z.string().optional(),
  longitude: z.string().optional(),
  created_at: z.string().optional(),
  like_count: z.number().optional(),
  phone: z
    .string()
    .regex(/^01([0 | 1 | 6 | 7 | 8 | 9])-([0-9]{3,4})-([0-9]{4})$/, {
      message: "휴대폰 번호를 정확하게 입력해주세요. (- 포함)",
    })
    .optional(),
  description: z.string().optional(),
  images: z.array(z.string().optional()),
});

export type LostPetRegisterFormData = z.infer<typeof lostPetSchema>;
