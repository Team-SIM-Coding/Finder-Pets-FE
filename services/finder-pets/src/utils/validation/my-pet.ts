import { z } from "zod";

export const myPetSchema = z.object({
  name: z.string().optional(),
  birth_day: z.string().optional(),
  adoption_day: z.string().optional(),
  animal: z.string().optional(),
  kind: z.string().optional(),
  gender: z.string().optional(),
  weight: z.string().optional(),
  color: z.string().optional(),
  is_neutering: z.boolean().optional(),
  is_adoption: z.boolean().optional(),
  intro: z.string().optional(),
});

export type MyPetRegisterFormData = z.infer<typeof myPetSchema>;
