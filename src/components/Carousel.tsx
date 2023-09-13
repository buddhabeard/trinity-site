import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, EffectCreative, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

import Hero from "./Hero";
import type { CarouselComponent } from "../interfaces/Components";

const Carousel = ({ carousel }: { carousel: CarouselComponent }) => (
  <Swiper
    modules={[Autoplay, A11y, EffectCreative, Pagination]}
    effect="creative"
    grabCursor
    speed={1200}
    loop
    creativeEffect={{
      prev: {
        shadow: true,
        translate: ["-120%", 0, -500],
      },
      next: {
        shadow: true,
        translate: ["120%", 0, -500],
      },
    }}
    pagination={{}}
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
      <SwiperSlide key={i} className="p-4 lg:p-16">
        <Hero key={item.id} {...item} />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default Carousel;
