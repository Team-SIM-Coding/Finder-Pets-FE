export interface MyPet {
  my_pet_id: string;
  name: string;
  animal: string;
  kind: string;
  gender: string;
  color: string;
  weight: number;
  intro: string;
  birth: string;
  adoption: string;
  age: number;
  is_neutering: boolean;
  is_adoption: boolean;
  profile_image: string;
}

export interface Pet {
  animal?: string;
  kind?: string;
  gender?: string;
  weight?: number;
  color?: string;
  age?: number;
  is_neutering?: boolean;
  character?: string;
}

export interface ListPetInfo {
  place?: string;
  animal?: string;
  kind?: string;
  gender?: string;
  description?: string;
  created_at?: string;
}
