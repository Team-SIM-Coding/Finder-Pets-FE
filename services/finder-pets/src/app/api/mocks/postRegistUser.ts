import { User } from "@/models/user";
import { HttpHandler, HttpResponse, http } from "msw";

const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

export const postRegisterUser: HttpHandler = http.post("/api/register", async ({ request }) => {
  const newUser = (await request.json()) as User;

  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));

  return HttpResponse.json(newUser, { status: 201 });
});
