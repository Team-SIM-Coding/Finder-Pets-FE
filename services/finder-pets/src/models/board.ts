import { IComment } from "@/models/comment";
import { Image } from "@/models/image";

export interface Board {
  board_id?: string;
  title: string;
  description?: string;
  created_at: string;
  like_count: number;
  area?: string;
  district?: string;
  animal?: string;
  kind?: string;
  gender?: string;
  weight: string;
  images?: Image[];
  comments?: IComment[];
}
