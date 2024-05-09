import { IComment } from "./comment";
import { Image } from "./image";
import { Pet } from "./pet";

export interface LostPet extends Pet {
  lost_pet_id: string;
  date?: string;
  place?: string;
  latitude?: string;
  longitude?: string;
  created_at?: string;
  like_count?: number;
  phone?: string;
  description?: string;
  images?: Image[];
  comments?: IComment[];
}
