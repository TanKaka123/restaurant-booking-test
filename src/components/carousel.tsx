import React from 'react';
import { Carousel } from 'flowbite-react';

interface CarouselDefaultProps {
  listItemCarousel: any[]; // Assuming listItemCarousel is an array of string URLs
}

const CarouselDefault: React.FC<CarouselDefaultProps> = ({ listItemCarousel }) => {
  return (
    <>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 rounded-none">
        <Carousel>
          {listItemCarousel &&
            listItemCarousel.map((itemCarousel, index) => (
              <img key={index} src={itemCarousel} alt="banner carousel" />
            ))}
        </Carousel>
      </div>
    </>
  );
};

export default CarouselDefault;
