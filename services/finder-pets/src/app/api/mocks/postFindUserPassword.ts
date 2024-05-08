import { User } from "@/models/user";
import { HttpHandler, HttpResponse, http } from "msw";

const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

export const postFindUserPassword: HttpHandler = http.post(
  "/api/find-password",
  async ({ request }) => {
    const { email, name, phone } = (await request.json()) as User;

    const user = users.find((u) => u.email === email && u.name === name && u.phone === phone);

    if (user) {
      console.log(`비밀번호 찾기 성공: 비밀번호는 ${user.password}입니다.`);
      return HttpResponse.json({ message: "비밀번호가 이메일로 발송되었습니다." }, { status: 200 });
    } else {
      return HttpResponse.json(
        { message: "이메일, 이름 또는 핸드폰 번호가 일치하지 않습니다." },
        { status: 404 },
      );
    }
  },
);
