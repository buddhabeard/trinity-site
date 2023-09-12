import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Hero from "./Hero.astro";
import type { CarouselComponent } from "../interfaces/Components";

const Carousel = ({ carousel }: { carousel: CarouselComponent }) => (
  <Swiper>
    {carousel.items.map((item) => (
      <SwiperSlide>
        <Hero key={item.id} {...item} />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default Carousel;
