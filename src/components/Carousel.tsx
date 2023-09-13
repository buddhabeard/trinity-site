import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Hero from "./Hero";
import type { CarouselComponent } from "../interfaces/Components";

const Carousel = ({ carousel }: { carousel: CarouselComponent }) => (
  <Swiper
    modules={[Autoplay, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    autoplay={{
      delay: 2000,
      disableOnInteraction: false,
    }}
    scrollbar={{ draggable: true }}
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
