import { deleteLostPet } from "@/app/api/mocks/deleteLostPet";
import { deleteMyPet } from "@/app/api/mocks/deleteMyPet";
import { getLostPet, getLostPets } from "@/app/api/mocks/getLostPet";
import { getMyPet, getMyPets } from "@/app/api/mocks/getMyPet";
import { getUser } from "@/app/api/mocks/getUser";
import { postFindUserId } from "@/app/api/mocks/postFindUserId";
import { postFindUserPassword } from "@/app/api/mocks/postFindUserPassword";
import { postLogInUser } from "@/app/api/mocks/postLogInUser";
import { postLostPet } from "@/app/api/mocks/postLostPet";
import { postMyPet } from "@/app/api/mocks/postMyPet";
import { postRegisterUser } from "@/app/api/mocks/postRegistUser";
import { postResetUserPassword } from "@/app/api/mocks/postResetUserPassword";
import { postUpdateUser } from "@/app/api/mocks/postUpdateUser";
import { putUpdateMyPet } from "@/app/api/mocks/putUpdateMyPet";
import { HttpHandler } from "msw";

export const handlers: HttpHandler[] = [
  getUser,
  postRegisterUser,
  postLogInUser,
  postFindUserId,
  postFindUserPassword,
  postResetUserPassword,
  postUpdateUser,
  postMyPet,
  getMyPets,
  getMyPet,
  putUpdateMyPet,
  deleteMyPet,
  postLostPet,
  getLostPets,
  getLostPet,
  deleteLostPet,
];
