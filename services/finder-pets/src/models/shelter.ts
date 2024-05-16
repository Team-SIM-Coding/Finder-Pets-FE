import { ListPetInfo } from "./pet";

export interface ShelterPet extends ListPetInfo {
  age?: string;
  careAddr: string;
  careNm: string;
  careTel: string;
  chargeNm: string;
  colorCd: string;
  desertionNo?: string;
  filename?: string;
  happenDt: string;
  happenPlace: string;
  kindCd: string;
  neuterYn: string;
  noticeEdt: string;
  noticeNo?: string;
  noticeSdt: string;
  officetel: string;
  orgNm: string;
  popfile?: string;
  sexCd: string;
  specialMark?: string;
  weight: string;
}

interface ShelterPetItems {
  item: ShelterPet[];
}

interface ShelterPetBody {
  items: ShelterPetItems;
}

export interface ShelterPetResponse {
  body: ShelterPetBody;
}

export interface ShelterPetResponseResponse {
  response: ShelterPetResponse;
}

export interface ShelterPetPage {
  response: ShelterPetResponseResponse;
}

export interface InfiniteShelterData {
  pages: ShelterPetPage[];
}
