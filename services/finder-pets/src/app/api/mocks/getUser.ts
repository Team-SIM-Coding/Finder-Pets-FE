import { HttpHandler, HttpResponse, http } from "msw";

export const getUser: HttpHandler = http.get("/api/user", () => {
  return HttpResponse.json({ id: 1, name: "John Doe" }, { status: 200 });
});
