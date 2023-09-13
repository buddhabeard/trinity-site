import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import Hero from "./Hero";
import type { CarouselComponent } from "../interfaces/Components";

const Carousel = ({ carousel }: { carousel: CarouselComponent }) => (
  <Swiper
    modules={[Autoplay, A11y, EffectFade]}
    effect="fade"
    grabCursor
    speed={1200}
    loop
    spaceBetween={50}
    slidesPerView={1}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log("slide change")}
  >
    {carousel.items.map((item, i) => (
      <SwiperSlide key={i}>
        <Hero key={item.id} {...item} />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default Carousel;
