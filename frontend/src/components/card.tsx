import Text from "./text";
import colors from "../constants/theme";
import { fontsize } from "../constants/style";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";

interface CardProps {
  address: string;
  name: string;
  thumbnail: string;
}

function Card({ address, name, thumbnail }: CardProps) {
  const [hovered, setHovered] = useState(false);
  const redColor = colors.PRIMARY;

  return (
    <div className="relative flex max-w-[24rem] flex-col overflow-hidden gap-1 items-center bg-white bg-clip-border text-gray-700 shadow-md text-center pb-6 h-full w-full">
      <div className="relative  w-full h-4/6 flex-col items-end justify-center overflow-hidden text-left">
        <div
          className="absolute inset-0 m-0 h-full w-full flex flex-col justify-end overflow-hidden rounded-none bg-transparent bg-cover bg-center text-gray-700 shadow-none"
          style={{ backgroundImage: `url(${thumbnail})` }}
        >
          <div className="absolute  w-full to-bg-black-10 bg-gradient-to-t bg-black-rgba h-2/5 flex flex-col justify-between p-2">
            <Text color={colors.WHITE} bold ellipsis>
              {name}
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
              {address}
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
