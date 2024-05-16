import { z } from "zod";

const passwordRequirements = z
  .string()
  .min(8, { message: "비밀번호는 8자 이상이어야 합니다." })
  .max(20, { message: "비밀번호는 20자 이하이어야 합니다." })
  .refine(
    (value) => {
      const hasEnglish = /[A-Za-z]/.test(value);
      const hasDigit = /\d/.test(value);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

      return hasEnglish && hasDigit && hasSpecialChar;
    },
    { message: "비밀번호는 영어, 숫자, 특수문자를 각각 하나 이상 포함해야 합니다." },
  )
  .refine((value) => !/(\d)\1\1/.test(value), {
    message: "비밀번호에 같은 숫자를 연속해서 사용할 수 없습니다.",
  });

export const registerSchema = z
  .object({
    email: z.string().email({ message: "유효하지 않은 이메일 형식입니다." }),
    password: passwordRequirements,
    name: z
      .string()
      .min(2, { message: "이름을 정확히 입력해주세요. (2글자 이상, 숫자 제외)" })
      .regex(/^[가-힣a-zA-Z]+$/, { message: "이름은 한글 또는 영문자만 가능합니다." }),
    phone: z.string().regex(/^01([0 | 1 | 6 | 7 | 8 | 9])-([0-9]{3,4})-([0-9]{4})$/, {
      message: "휴대폰 번호를 정확하게 입력해주세요. (- 포함)",
    }),
    confirmPassword: z.string(),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "비밀번호가 일치하지 않습니다.",
        path: ["confirmPassword"],
      });
    }
  });

export const loginSchema = z.object({
  email: z.string().email({ message: "유효하지 않은 이메일 형식입니다." }),
  password: z.string(),
});

export const findIdSchema = z.object({
  name: z.string().min(1, { message: "이름을 입력해주세요." }),
  phone: z.string().regex(/^01([0 | 1 | 6 | 7 | 8 | 9])-([0-9]{3,4})-([0-9]{4})$/, {
    message: "휴대폰 번호를 정확하게 입력해주세요. (- 포함)",
  }),
});

export const findPasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: "이메일을 입력해주세요." })
    .email({ message: "유효하지 않은 이메일 형식입니다." }),
  name: z.string().min(1, { message: "이름을 입력해주세요." }),
  phone: z.string().regex(/^01([0 | 1 | 6 | 7 | 8 | 9])-([0-9]{3,4})-([0-9]{4})$/, {
    message: "휴대폰 번호를 정확하게 입력해주세요. (- 포함)",
  }),
});

export const resetPasswordSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "이메일을 입력해주세요." })
      .email({ message: "유효하지 않은 이메일 형식입니다." }),
    password: passwordRequirements,
    newPassword: passwordRequirements,
    confirmPassword: z.string().min(1, { message: "새로운 비밀번호를 다시 입력해주세요." }),
  })
  .superRefine(({ newPassword, confirmPassword }, ctx) => {
    if (newPassword !== confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "비밀번호가 일치하지 않습니다.",
        path: ["confirmPassword"],
      });
    }
  });

export const profileSchema = z.object({
  nickname: z.string(),
  phone: z.string(),
  like_area: z.string(),
  like_animal: z.string(),
  like_kind: z.string(),
  intro: z.string(),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
export type LogInFormData = z.infer<typeof loginSchema>;
export type FindIdFormData = z.infer<typeof findIdSchema>;
export type FindPasswordFormData = z.infer<typeof findPasswordSchema>;
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
export type ProfileFormData = z.infer<typeof profileSchema>;
