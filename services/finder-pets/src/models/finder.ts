import { IComment } from "./comment";
import { Image } from "./image";
import { Pet } from "./pet";

export interface FinderPet extends Pet {
  pet_id?: string;
  my_pet_id?: string;
  date?: string;
  place?: string;
  created_at?: string;
  like_count?: number;
  phone?: string;
  description?: string;
  images?: Image[];
  comments?: IComment[];
}
