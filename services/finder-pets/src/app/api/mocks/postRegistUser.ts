import { HttpHandler, HttpResponse, http } from "msw";

export const postRegisterUser: HttpHandler = http.post("/api/register", async ({ request }) => {
  const newUser = await request.json();

  return HttpResponse.json(newUser, { status: 201 });
});
