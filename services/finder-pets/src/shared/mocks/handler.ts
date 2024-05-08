import { getUser } from "@/app/api/mocks/getUser";
import { postFindUserId } from "@/app/api/mocks/postFindUserId";
import { postLogInUser } from "@/app/api/mocks/postLogInUser";
import { postRegisterUser } from "@/app/api/mocks/postRegistUser";
import { HttpHandler } from "msw";

export const handlers: HttpHandler[] = [getUser, postRegisterUser, postLogInUser, postFindUserId];
