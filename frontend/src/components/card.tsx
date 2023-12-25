import React, { useState } from "react";
import Text from "./text";
import Button from "./button";
import { buttonSize, fontsize } from "../constants/style";
import colors from "../constants/theme";
import { FaStar } from "react-icons/fa";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";

interface CardProps {
  prop: string;
}

function Card({ prop }: CardProps) {
  const [hovered, setHovered] = useState(false);
  const redColor = colors.PRIMARY;

  return (
    <div className="relative flex max-w-[24rem] flex-col overflow-hidden gap-1 items-center bg-white bg-clip-border text-gray-700 shadow-md text-center pb-6 h-full w-full">
      <div className="relative  w-full h-4/6 flex-col items-end justify-center overflow-hidden text-left">
        <div className="absolute inset-0 m-0 h-full w-full flex flex-col justify-end overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
          <div className="absolute  w-full to-bg-black-10 bg-gradient-to-t bg-black-rgba h-2/5 flex flex-col justify-between p-2">
            <Text color={colors.WHITE} bold ellipsis>
              How we design and codesadsdas dasdasd
            </Text>
            <div className="flex ">
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />

              <PiCurrencyDollarSimpleBold className="text-orange-500" />
              <PiCurrencyDollarSimpleBold className="text-orange-500" />
              <PiCurrencyDollarSimpleBold className="text-orange-500" />
              <PiCurrencyDollarSimpleBold className="text-orange-500" />
              <PiCurrencyDollarSimpleBold className="text-orange-500" />
            </div>
            <Text ellipsis color={colors.WHITE} size={fontsize.SMALL}>
              display name display name display name
            </Text>
          </div>
        </div>
        <div className="relative p-6 px-6 py-14 md:px-12 "></div>
      </div>
      <div className="h-2/6 flex flex-col gap-2 p-2">
        <Text bold>
          <span className="text-red-600">Giảm 15%</span>{" "}
        </Text>
        <Text color={colors.GRAY}>Gọi món Á - Âu</Text> 
        <button
          className="bg-transparent hover:bg-blue-500    hover:text-white py-2 px-4 border   hover:border-transparent rounded w-fit"
          style={{
            backgroundColor: hovered ? redColor : "transparent",
            color: hovered ? "white" : "black",
            transition: "background-color 0.3s, color 0.3s",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Đặt chỗ ngay
        </button>
      </div>
    </div>
  );
}

export default Card;
