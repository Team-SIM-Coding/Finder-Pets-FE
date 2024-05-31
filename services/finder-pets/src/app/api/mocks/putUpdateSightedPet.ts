import { FinderPet } from "@/models/finder";

import { HttpHandler, HttpResponse, http } from "msw";

const sightedPets: FinderPet[] = JSON.parse(localStorage.getItem("sighted-pets") || "[]");

export const putUpdateSightedPet: HttpHandler = http.put(
  "/api/sighted/update/:id",
  async ({ params, request }) => {
    const sightedPetId = params.id;
    const updatedSightedPetData = (await request.json()) as Partial<FinderPet>;

    const petIndex = sightedPets.findIndex((p) => p.pet_id === sightedPetId);

    if (petIndex !== -1) {
      sightedPets[petIndex] = { ...sightedPets[petIndex], ...updatedSightedPetData };

      localStorage.setItem("sighted-pets", JSON.stringify(sightedPets));

      return HttpResponse.json(sightedPets[petIndex], { status: 200 });
    } else {
      return HttpResponse.json({ message: "목격된 반려동물을 찾을 수 없습니다." }, { status: 404 });
    }
  },
);

export const fetchUpdateSightedPet = async (id: string, data: FinderPet) => {
  const response = await fetch(`/api/sighted/update/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};
