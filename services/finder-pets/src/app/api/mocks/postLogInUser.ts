import { User } from "@/models/user";

import { HttpHandler, HttpResponse, http } from "msw";

const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

export const postLogInUser: HttpHandler = http.post("/api/login", async ({ request }) => {
  const { email, password } = (await request.json()) as User;

  const user = users.find((u) => u.email === email && u.password === password);

  console.log("user", user);

  if (user) {
    return HttpResponse.json(user, { status: 200 });
  } else {
    return HttpResponse.json(
      { message: "이메일 또는 비밀번호가 잘못되었습니다." },
      { status: 401 },
    );
  }
});
