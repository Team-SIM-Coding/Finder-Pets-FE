import {
  deleteLostComment,
  deleteReviewComment,
  deleteSightedComment,
  deleteStoryComment,
} from "@/api/mocks/deleteComment";
import { deleteLostPet } from "@/api/mocks/deleteLostPet";
import { deleteMyPet } from "@/api/mocks/deleteMyPet";
import { deletePetStory } from "@/api/mocks/deletePetStory";
import { deleteReview } from "@/api/mocks/deleteReview";
import { deleteSightedPet } from "@/api/mocks/deleteSightedPet";
import {
  getLostComments,
  getReviewComments,
  getSightedComments,
  getStoryComments,
} from "@/api/mocks/getComments";
import { getLostPet, getLostPets } from "@/api/mocks/getLostPet";
import { getMyPet, getMyPets } from "@/api/mocks/getMyPet";
import { getPetStories, getPetStory } from "@/api/mocks/getPetStory";
import { getReview, getReviews } from "@/api/mocks/getReview";
import { getSightedPet, getSightedPets } from "@/api/mocks/getSightedPet";
import { getUser } from "@/api/mocks/getUser";
import {
  postLostComment,
  postReviewComment,
  postSightedComment,
  postStoryComment,
} from "@/api/mocks/postComment";
import { postFindUserId } from "@/api/mocks/postFindUserId";
import { postFindUserPassword } from "@/api/mocks/postFindUserPassword";
import { postLogInUser } from "@/api/mocks/postLogInUser";
import { postLostPet } from "@/api/mocks/postLostPet";
import { postMyPet } from "@/api/mocks/postMyPet";
import { postPetStory } from "@/api/mocks/postPetStory";
import { postRegisterUser } from "@/api/mocks/postRegistUser";
import { postResetUserPassword } from "@/api/mocks/postResetUserPassword";
import { postReview } from "@/api/mocks/postReview";
import { postSightedPet } from "@/api/mocks/postSightedPet";
import { postUpdateUser } from "@/api/mocks/postUpdateUser";
import {
  putUpdateLostComment,
  putUpdateReviewComment,
  putUpdateSightedComment,
  putUpdateStoryComment,
} from "@/api/mocks/putUpdateComment";
import { putUpdateLostPet } from "@/api/mocks/putUpdateLostPet";
import { putUpdateMyPet } from "@/api/mocks/putUpdateMyPet";
import { putUpdatePetStory } from "@/api/mocks/putUpdatePetStory";
import { putUpdateReview } from "@/api/mocks/putUpdateReview";
import { putUpdateSightedPet } from "@/api/mocks/putUpdateSightedPet";

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
  postSightedPet,
  getSightedPets,
  getSightedPet,
  deleteSightedPet,
  postReview,
  getReviews,
  getReview,
  deleteReview,
  postPetStory,
  getPetStories,
  getPetStory,
  deletePetStory,
  postLostComment,
  postSightedComment,
  postReviewComment,
  postStoryComment,
  getLostComments,
  getSightedComments,
  getReviewComments,
  getStoryComments,
  putUpdateLostComment,
  putUpdateSightedComment,
  putUpdateReviewComment,
  putUpdateStoryComment,
  deleteLostComment,
  deleteSightedComment,
  deleteReviewComment,
  deleteStoryComment,
  putUpdateLostPet,
  putUpdateSightedPet,
  putUpdatePetStory,
  putUpdateReview,
];
