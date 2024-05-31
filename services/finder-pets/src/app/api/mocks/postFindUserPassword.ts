import { User } from "@/models/user";

import { HttpHandler, HttpResponse, http } from "msw";

const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

export const postFindUserPassword: HttpHandler = http.post(
  "/api/find-password",
  async ({ request }) => {
    const { email, name, phone } = (await request.json()) as User;

    const user = users.find((u) => u.email === email);

    if (!user) {
      return HttpResponse.json(
        { message: "등록된 아이디가 없습니다. 회원가입 페이지로 이동하시겠습니까?" },
        { status: 404 },
      );
    }

    const isMatch = user.email === email && user.name === name && user.phone === phone;

    if (!isMatch) {
      return HttpResponse.json(
        { message: "이름 또는 핸드폰 번호가 일치하지 않습니다." },
        { status: 400 },
      );
    }

    return HttpResponse.json({ message: "비밀번호가 이메일로 발송되었습니다." }, { status: 200 });
  },
);
