import { z } from "zod";

export const SignUpSchemaCheck = z.object({
  nickname: z.string().min(2, { message: "닉네임은 2글자 이상이어야 합니다." }).max(8, { message: "닉네임은 8글자 이하이어야 합니다." }),
  email: z.string().email({ message: "올바른 이메일을 입력해주세요." }),
  phone: z
    .string()
    .min(11, "연락처는 11자리여야 합니다.")
    .max(11, "연락처는 11자리여야 합니다.")
    .refine((value) => /^010\d{8}$/.test(value), "010으로 시작하는 11자리 숫자를 입력해주세요"),
  role: z.string().min(2, { message: "역할을 선택해주세요." }),
  password: z
    .string()
    .min(6, "비밀번호는 최소 6자리 이상이어야 합니다.")
    .max(100, "비밀번호는 100자리 이하이어야 합니다.")
    .refine((value) => /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value), "비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다."),
  confirmPassword: z
    .string()
    .min(6, "비밀번호는 최소 6자리 이상이어야 합니다.")
    .max(100, "비밀번호는 100자리 이하이어야 합니다.")
    .refine((value) => /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value), "비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다."),
});

export const SignInSchemaCheck = z.object({
  email: z.string().email({ message: "올바른 이메일을 입력해주세요." }),
  password: z
    .string()
    .min(6, "비밀번호는 최소 6자리 이상이어야 합니다.")
    .max(100, "비밀번호는 100자리 이하이어야 합니다.")
    .refine((value) => /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value), "비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다."),
});
