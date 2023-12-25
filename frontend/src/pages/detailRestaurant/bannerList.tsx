import React from "react"; 
import { corner } from "../../constants/style";
 

interface CarouselBodyProps {
  listImage: string[] | null;
}
const BannerList: React.FC<CarouselBodyProps> = ({ listImage }) => {
  return (
    < >
      {listImage && listImage.map((itemImage, index) => (
        <img
          key={index}
          src={itemImage}
          alt={`Banner ${index + 1}`}
          className="h-full"
          style={{ borderRadius: corner.corner_08, }}

        />
      ))}
    </>
  );
};

export default BannerList;
