import { IComment } from "@/models/comment";
import { Image } from "@/models/image";
import { Pet } from "@/models/pet";

export interface FinderPet extends Pet {
  pet_id?: string;
  my_pet_id?: string;
  date?: string;
  area?: string;
  created_at?: string;
  like_count?: number;
  phone?: string;
  description?: string;
  images?: Image[] | undefined;
  comments?: IComment[];
}
