import { IComment } from "./comment";
import { Image } from "./image";

export interface PetStory {
  pet_story_id?: string;
  title: string;
  description?: string;
  created_at: string;
  like_count: number;
  place?: string;
  animal?: string;
  kind?: string;
  images?: Image[];
  comments?: IComment[];
}
