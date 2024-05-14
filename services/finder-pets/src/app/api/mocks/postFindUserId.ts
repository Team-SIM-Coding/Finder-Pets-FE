import { User } from "@/models/user";
import { HttpHandler, HttpResponse, http } from "msw";

const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

export const postFindUserId: HttpHandler = http.post("/api/find-id", async ({ request }) => {
  const { name, phone } = (await request.json()) as User;

  const user = users.find((u) => u.name === name);

  if (!user) {
    return HttpResponse.json(
      { message: "등록된 사용자가 없습니다. 회원가입 페이지로 이동하시겠습니까?" },
      { status: 404 },
    );
  }

  const isMatch = user.name === name && user.phone === phone;
  if (!isMatch) {
    return HttpResponse.json({ message: "휴대폰 번호가 잘못되었습니다." }, { status: 400 });
  }

  return HttpResponse.json({ email: user.email }, { status: 200 });
});
