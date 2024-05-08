import { User } from "@/models/user";
import { HttpHandler, HttpResponse, http } from "msw";

const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

export const postFindUserId: HttpHandler = http.post("/api/find-id", async ({ request }) => {
  const { name, phone } = (await request.json()) as User;

  const user = users.find((u) => u.name === name && u.phone === phone);

  if (user) {
    return HttpResponse.json({ email: user.email }, { status: 200 });
  } else {
    return HttpResponse.json(
      { message: "이름 또는 핸드폰 번호가 잘못되었습니다." },
      { status: 404 },
    );
  }
});
