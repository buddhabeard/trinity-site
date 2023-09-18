import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import Hero from "./Hero";
import type { CarouselComponent } from "../interfaces/Components";

const Carousel = ({ carousel }: { carousel: CarouselComponent }) => (
  <Swiper
    modules={[Autoplay, A11y, EffectFade, Navigation]}
    effect="fade"
    grabCursor
    speed={1200}
    loop
    navigation
    spaceBetween={50}
    slidesPerView={1}
    autoplay={{
      delay: 2500,
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
