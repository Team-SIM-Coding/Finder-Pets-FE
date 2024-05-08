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
}

export interface Pet {
  pet_id: string;
  animal: string;
  kind: string;
  gender: string;
  weight: number;
  color: string;
  age: number;
  character: string;
}