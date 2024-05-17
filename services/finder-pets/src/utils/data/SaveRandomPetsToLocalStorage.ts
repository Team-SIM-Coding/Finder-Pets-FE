"use client";
import { useEffect } from "react";
import { v4 as uuid } from "uuid";

const generateRandomAddresses = (count: number) => {
  const cities = [
    "서울특별시",
    "부산광역시",
    "대구광역시",
    "인천광역시",
    "광주광역시",
    "대전광역시",
    "울산광역시",
    "세종특별자치시",
    "경기도",
    "강원도",
    "충청북도",
    "충청남도",
    "전라북도",
    "전라남도",
    "경상북도",
    "경상남도",
    "제주특별자치도",
  ];

  const districts = [
    "강남구",
    "서초구",
    "강북구",
    "관악구",
    "광진구",
    "구로구",
    "금천구",
    "노원구",
    "동대문구",
    "동작구",
    "서대문구",
    "성동구",
    "성북구",
    "송파구",
    "양천구",
    "영등포구",
    "용산구",
    "은평구",
    "종로구",
    "중구",
    "중랑구",
  ];

  const streets = [
    "테헤란로",
    "서초대로",
    "도봉로",
    "남부순환로",
    "능동로",
    "구로동로",
    "가산디지털1로",
    "동일로",
    "왕산로",
    "상도로",
    "강변북로",
    "올림픽대로",
    "반포대로",
    "신사로",
    "성수로",
    "언주로",
    "여의대로",
    "종로",
    "청계천로",
    "을지로",
  ];

  const addresses = [];
  for (let i = 0; i < count; i++) {
    const city = cities[Math.floor(Math.random() * cities.length)];
    const district = districts[Math.floor(Math.random() * districts.length)];
    const street = streets[Math.floor(Math.random() * streets.length)];
    const buildingNumber = Math.floor(Math.random() * 1000) + 1;
    const address = `${city} ${district} ${street} ${buildingNumber}`;
    addresses.push(address);
  }

  return addresses;
};

const addresses = generateRandomAddresses(20);

const generateRandomPets = (count: number) => {
  const animals = ["개", "고양이", "토끼"];
  const kinds = ["도베르만", "골든 리트리버", "비글"];
  const colors = ["검정", "흰색", "갈색"];
  const characters = ["사나워요", "온순해요", "겁이 많아요"];

  const randomDate = () => {
    const start = new Date(2023, 0, 1);
    const end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
      .toISOString()
      .split("T")[0];
  };

  const randomPhoneNumber = () => {
    const secondPart = Math.floor(Math.random() * 9000) + 1000;
    const thirdPart = Math.floor(Math.random() * 9000) + 1000;
    return `010-${secondPart}-${thirdPart}`;
  };

  const pets = [];
  for (let i = 0; i < count; i++) {
    const pet = {
      pet_id: uuid(),
      date: randomDate(),
      place: addresses[Math.floor(Math.random() * addresses.length)],
      created_at: randomDate(),
      like_count: Math.floor(Math.random() * 10),
      my_pet_id: uuid(),
      animal: animals[Math.floor(Math.random() * animals.length)],
      kind: kinds[Math.floor(Math.random() * kinds.length)],
      gender: Math.random() > 0.5 ? "수컷" : "암컷",
      weight: Math.floor(Math.random() * 30) + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      age: Math.floor(Math.random() * 15) + 1,
      character: characters[Math.floor(Math.random() * characters.length)],
      phone: randomPhoneNumber(),
      description: `설명 ${i + 1}`,
      images: ["/images/pet1.jpeg", "/images/pet2.jpeg", "/images/pet3.jpeg"],
      comments: [],
    };
    pets.push(pet);
  }
  return pets;
};

const SaveRandomPetsToLocalStorage = () => {
  useEffect(() => {
    const randomPets = generateRandomPets(20);
    localStorage.setItem("sighted-pets", JSON.stringify(randomPets));
  }, []);

  return null;
};

export default SaveRandomPetsToLocalStorage;
