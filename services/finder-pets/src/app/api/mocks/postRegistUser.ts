import { User } from "@/models/user";
import { HttpHandler, HttpResponse, http } from "msw";

const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

export const postRegisterUser: HttpHandler = http.post("/api/register", async ({ request }) => {
  const newUser = (await request.json()) as User;

  const isDuplicate = users.some((user) => user.email === newUser.email);

  if (isDuplicate) {
    return HttpResponse.json({ message: "이미 등록된 이메일이 있습니다." }, { status: 409 });
  }

  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));

  return HttpResponse.json(newUser, { status: 201 });
});
