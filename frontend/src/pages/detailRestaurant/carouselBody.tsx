import CarouselDefault from "../../components/carousel";

interface CarouselBodyProps {
  listImage: string[] | null;
}
const CarouselBody: React.FC<CarouselBodyProps> = ({ listImage }) => {

  return (
    <>
      <CarouselDefault listItemCarousel={listImage} />
    </>
  );
};
export default CarouselBody;
