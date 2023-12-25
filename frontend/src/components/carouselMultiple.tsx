import React, { useState } from "react";
import "./carousel.css";
// Data
import { MdOutlineNavigateNext, MdOutlineArrowBackIos } from "react-icons/md";
import Card from "./card";

interface CardData {
  idx: number;
  pos: number;
  text: string;
  active: boolean;
}

const CarouselMultiple: React.FC = () => {
  const initialState: CardData[] = [
    { idx: 1, pos: 1, text: "Số 320 Bến Vân Đồn, P. 2 TP HCM", active: true },
    { idx: 2, pos: 2, text: "2", active: true },
    { idx: 3, pos: 3, text: "3", active: true },
    { idx: 4, pos: 4, text: "4", active: false },
    { idx: 4, pos: 4, text: "4", active: false },
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
              <Card key={index} prop={card.text} />
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
