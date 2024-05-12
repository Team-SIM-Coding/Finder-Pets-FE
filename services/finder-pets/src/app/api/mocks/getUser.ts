import { User } from "@/models/user";
import { HttpHandler, HttpResponse, http } from "msw";

const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

export const getUser: HttpHandler = http.get("/api/user", async ({ request }) => {
  const url = new URL(request.url);
  const userId = url.searchParams.get("id");

  const user = users.find((u) => u.user_id === userId);

  if (user) {
    return HttpResponse.json(user, { status: 200 });
  } else {
    return HttpResponse.json({ message: "유저를 찾을 수 없습니다." }, { status: 404 });
  }
});
