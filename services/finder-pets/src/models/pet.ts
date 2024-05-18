import { Image } from "./image";

export interface MyPet {
  my_pet_id: string;
  name: string;
  animal: string;
  kind: string;
  gender: string;
  color: string;
  weight: number;
  intro: string;
  birth_day: string;
  adoption_day: string;
  age: number;
  is_neutering: boolean;
  is_adoption: boolean;
  pet_image: Image;
}

export interface Pet {
  animal?: string;
  kind?: string;
  gender?: string;
  weight?: string;
  color?: string;
  age?: string;
  is_neutering?: boolean;
  character?: string;
}

export interface ListPetInfo {
  area?: string;
  animal?: string;
  kind?: string;
  gender?: string;
  description?: string;
  created_at?: string;
}
