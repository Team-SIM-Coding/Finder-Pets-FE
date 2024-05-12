import { PasswordResetRequest, User } from "@/models/user";
import { HttpHandler, HttpResponse, http } from "msw";

const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

export const postResetUserPassword: HttpHandler = http.post(
  "/api/reset-password",
  async ({ request }) => {
    const { email, password, newPassword } = (await request.json()) as PasswordResetRequest;

    const userIndex = users.findIndex((u) => u.email === email && u.password === password);

    if (userIndex !== -1) {
      users[userIndex].password = newPassword;

      localStorage.setItem("users", JSON.stringify(users));

      return HttpResponse.json(
        { message: "비밀번호가 성공적으로 변경되었습니다." },
        { status: 200 },
      );
    } else {
      return HttpResponse.json(
        { message: "이메일 또는 기존 비밀번호가 일치하지 않습니다." },
        { status: 400 },
      );
    }
  },
);
