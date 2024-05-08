import { getUser } from "@/app/api/mocks/getUser";
import { HttpHandler } from "msw";

export const handlers: HttpHandler[] = [getUser];
