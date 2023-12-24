import CarouselDefault from "../../components/carousel";

const CarouselBody = () => {
  const bannerImages = [
    "https://pasgo.vn/Upload/anh-chi-tiet/nha-hang-mk-kitchen-bar-ben-van-don-9-normal-2253770756514.webp",
    "https://pasgo.vn/Upload/anh-chi-tiet/nha-hang-mk-kitchen-bar-ben-van-don-1-normal-2253769856506.webp",
    "https://pasgo.vn/Upload/anh-chi-tiet/nha-hang-mk-kitchen-bar-ben-van-don-2-normal-2253769956507.webp",
    "https://pasgo.vn/Upload/anh-chi-tiet/nha-hang-mk-kitchen-bar-ben-van-don-3-normal-2253770156508.webp",
    "https://pasgo.vn/Upload/anh-chi-tiet/nha-hang-mk-kitchen-bar-ben-van-don-4-normal-2253770256509.webp",
    "https://pasgo.vn/Upload/anh-chi-tiet/nha-hang-mk-kitchen-bar-ben-van-don-7-normal-2253770556512.webp",
  ];
  return (
    <>
      <CarouselDefault listItemCarousel={bannerImages} />
    </>
  );
};
export default CarouselBody;
