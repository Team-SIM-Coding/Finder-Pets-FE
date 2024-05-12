import { User } from "@/models/user";
import { HttpHandler, HttpResponse, http } from "msw";

const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

export const postUpdateUser: HttpHandler = http.post("/api/user/update", async ({ request }) => {
  const { user_id, phone, nickname, like_area, like_animal, like_kind, intro } =
    (await request.json()) as User;

  const userIndex = users.findIndex((u) => u.user_id === user_id);

  if (userIndex !== -1) {
    users[userIndex].phone = phone ?? users[userIndex].phone;
    users[userIndex].nickname = nickname ?? users[userIndex].nickname;
    users[userIndex].like_area = like_area ?? users[userIndex].like_area;
    users[userIndex].like_animal = like_animal ?? users[userIndex].like_animal;
    users[userIndex].like_kind = like_kind ?? users[userIndex].like_kind;
    users[userIndex].intro = intro ?? users[userIndex].intro;

    localStorage.setItem("users", JSON.stringify(users));

    return HttpResponse.json(
      { message: "프로필이 성공적으로 업데이트되었습니다." },
      { status: 200 },
    );
  } else {
    return HttpResponse.json({ message: "유저를 찾을 수 없습니다." }, { status: 404 });
  }
});
