import { FinderPet } from "@/models/finder";
import { FinderPetRegisterFormData } from "@/utils/validation/finder";

import { HttpHandler, HttpResponse, http } from "msw";

const lostPets: FinderPet[] = JSON.parse(localStorage.getItem("lost-pets") || "[]");

export const postLostPet: HttpHandler = http.post("/api/lost/register", async ({ request }) => {
  const newLostPet = (await request.json()) as FinderPet;

  lostPets.push(newLostPet);

  localStorage.setItem("lost-pets", JSON.stringify(lostPets));

  return HttpResponse.json(newLostPet, { status: 201 });
});

export const fetchPostPet = async (data: {
  formData: FinderPetRegisterFormData;
  category: string | undefined;
}): Promise<FinderPetRegisterFormData> => {
  const { formData, category } = data;
  const response = await fetch(`/api/${category === "lost" ? "lost" : "sighted"}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  return response.json();
};
