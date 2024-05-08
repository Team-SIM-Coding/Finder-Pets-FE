import { getUser } from "@/app/api/mocks/getUser";
import { postRegisterUser } from "@/app/api/mocks/postRegistUser";
import { HttpHandler } from "msw";

export const handlers: HttpHandler[] = [getUser, postRegisterUser];
