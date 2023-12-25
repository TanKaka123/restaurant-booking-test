import React from "react"; 
import { corner } from "../../constants/style";
 
const imageBannerList: string[] = [
  "https://pasgo.vn/Upload/anh-chi-tiet/nha-hang-mk-kitchen-bar-ben-van-don-1-200-2253769856506.webp",
  "https://pasgo.vn/Upload/anh-chi-tiet/nha-hang-mk-kitchen-bar-ben-van-don-2-200-2253769956507.webp",
  "https://pasgo.vn/Upload/anh-chi-tiet/nha-hang-mk-kitchen-bar-ben-van-don-3-200-2253770156508.webp",
  "https://pasgo.vn/Upload/anh-chi-tiet/nha-hang-mk-kitchen-bar-ben-van-don-4-200-2253770256509.webp",
  "https://pasgo.vn/Upload/anh-chi-tiet/nha-hang-mk-kitchen-bar-ben-van-don-5-200-2253770356510.webp",
  "https://pasgo.vn/Upload/anh-chi-tiet/nha-hang-mk-kitchen-bar-ben-van-don-6-normal-2253770456511.webp",
];

const BannerList: React.FC = () => {
  return (
    < >
      {imageBannerList.map((imageBannerItem, index) => (
        <img
          key={index}
          src={imageBannerItem}
          alt={`Banner ${index + 1}`}
          className="h-full"
          style={{ borderRadius: corner.corner_08, }}

        />
      ))}
    </>
  );
};

export default BannerList;
