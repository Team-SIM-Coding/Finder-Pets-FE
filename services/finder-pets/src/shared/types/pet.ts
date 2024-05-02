export type LostPets = {
  pet_id: number;
  lost_date: Date;
  lost_price: string;
  latitude: number;
  longitude: number;
  animal: string;
  kind: string;
  gender: string;
  weight: number;
  color: string;
  age: number;
  is_neutering: boolean;
  character: string;
  phone: string;
  description: string;
  created_at: Date;
  user_id: string;
  my_pet_id: string;
  images: PetImage[];
};

export type PetImage = {
  image_id: string;
  image_url: string;
};
