import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Pagination, EffectFlip } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";

import Hero from "./Hero";
import type { CarouselComponent } from "../interfaces/Components";

const Carousel = ({
  carousel,
  withHeading = true,
}: {
  carousel: CarouselComponent;
  withHeading?: boolean;
}) => (
  <Swiper
    modules={[Autoplay, A11y, EffectFlip, Pagination]}
    effect="flip"
    grabCursor
    speed={800}
    loop
    pagination
    spaceBetween={50}
    slidesPerView={1}
    autoplay={{
      delay: 3600,
      disableOnInteraction: false,
    }}
  >
    {carousel.items.map((item, i) => (
      <SwiperSlide key={i}>
        <Hero key={item.id} {...item} withHeading={withHeading} />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default Carousel;
