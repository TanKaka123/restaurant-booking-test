import React, { useState } from "react";
import "./carousel.css";
import { MdOutlineNavigateNext, MdOutlineArrowBackIos } from "react-icons/md";
import Card from "./card";

interface CardData {
  idx: number;
  name:string;
  pos: number;
  address: string;
  active: boolean;
  thumbnail:string;
}

const CarouselMultiple: React.FC = () => {
  const initialState: CardData[] = [
    { idx: 1, pos: 1, name:"Gyu Shige Ngưu Phồn - Nguyễn Thị Minh Khai" ,address: "Số 320 Bến Vân Đồn, P. 2 TP HCM", active: true, thumbnail:"https://pasgo.vn/Upload/anh-chi-tiet/stix-slide12-normal-121694810537.webp" },
    { idx: 2, pos: 2, name:"Viet Village - Đinh Tiên Hoàng" , address: "Số 163 Cô Giang, P. Cô Giang, Q. 1", active: true, thumbnail:"https://pasgo.vn/Upload/anh-chi-tiet/nha-hang-hoa-vien-nguyen-thi-minh-khai-10-normal-694481534275.webp" },
    { idx: 3, pos: 3, name:"Ẩm thực Hải sản RIVIA – Nguyễn Cư Trinh" , address: "174A Nguyễn Đình Chiểu, P. 6, Q. 3", active: true, thumbnail:"https://pasgo.vn/Upload/anh-chi-tiet/nha-hang-am-thuc-hai-san-rivia-slide-4-normal-2203936719807.webp" },
    { idx: 4, pos: 4, name:"Hoa Viên Craft Brewery - Nguyễn Thị Minh Khai" , address: "Số 18 Bis/ 30A1 Nguyễn Thị Minh Khai, P. Đa Kao, Q. 1", active: false, thumbnail:"https://pasgo.vn/Upload/anh-chi-tiet/nha-hang-viet-village-dinh-tien-hoang-2-normal-2084540751407.webp" },
    { idx: 4, pos: 4,  name:"Stix - Góc Lê Quý Đôn và Nguyễn Đình Chiểu" ,address: "174A Nguyễn Đình Chiểu, P. 6, Q. 3", active: false, thumbnail:"https://pasgo.vn/Upload/anh-chi-tiet/nha-hang-gyu-shige-nguu-phon-nguyen-thi-minh-khai-7-normal-472389229471.webp" },
  ];

  const [cards, setCards] = useState<CardData[]>(initialState);

  const handleLeftClick = () => {
    const prevState = [...cards];
    const nextCard = prevState
      .filter((card) => card.active)
      .sort((a, b) => a.pos - b.pos)[0];

    if (nextCard) {
      // Reset
      prevState.find((card) => !card.active)!.active = true;

      // Update
      prevState.find((card) => card.idx === nextCard.idx)!.active = false;

      // Maximize pos
      prevState.find((card) => card.idx === nextCard.idx)!.pos =
        Math.max(...prevState.map((o) => o.pos)) + 1;

      // Update state
      setCards(prevState);
    }
  };

  const handleRightClick = () => {
    const prevState = [...cards];
    const nextCard = prevState
      .filter((card) => card.active)
      .sort((a, b) => a.pos - b.pos)
      .pop();

    if (nextCard) {
      // Minimize pos
      prevState.find((card) => !card.active)!.pos =
        Math.min(...prevState.map((o) => o.pos)) - 1;

      // Reset
      prevState.find((card) => !card.active)!.active = true;

      // Update
      prevState.find((card) => card.idx === nextCard.idx)!.active = false;

      // Update state
      setCards(prevState);
    }
  };

  return (
    <div className="flex  relative">
      <div
        className="absolute left-0 top-1/3 text-xl md:text-5xl cursor-pointer bg-white bg-opacity-80 rounded-e-md z-20"
        onClick={handleLeftClick}
      >
        <MdOutlineArrowBackIos />
      </div>
      <div className="flex w-full">
        {cards
          .filter((card) => card.active)
          .sort((a, b) => a.pos - b.pos)
          .map((card, index) => (
            <div className="w-1/3 m-2 h-96">
              <Card key={index} address={card.address} name={card.name}   thumbnail={card.thumbnail} />
            </div>
          ))}
      </div>

      <div
        className="absolute right-0 top-1/3 text-xl md:text-5xl cursor-pointer bg-white bg-opacity-80 rounded-s-md"
        onClick={handleRightClick}
      >
        <MdOutlineNavigateNext />
      </div>
    </div>
  );
};

export default CarouselMultiple;
