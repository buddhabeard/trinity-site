import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Pagination, EffectFlip } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";

import Hero from "./Hero";
import type { CarouselComponent } from "../interfaces/Components";

const Carousel = ({ carousel }: { carousel: CarouselComponent }) => (
  <Swiper
    modules={[Autoplay, A11y, EffectFlip, Pagination]}
    effect="flip"
    grabCursor
    speed={1000}
    loop
    pagination
    spaceBetween={50}
    slidesPerView={1}
    autoplay={{
      delay: 2800,
      disableOnInteraction: false,
    }}
  >
    {carousel.items.map((item, i) => (
      <SwiperSlide key={i}>
        <Hero key={item.id} {...item} />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default Carousel;
