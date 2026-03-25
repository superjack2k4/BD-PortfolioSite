import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function EventCarousel({ images = [], title = "" }) {
  if (!images.length) return null;

  return (
    <div className="event-carousel-wrapper">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        loop={images.length > 1}
        autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
        navigation
        pagination={{ clickable: true }}
        speed={800}
        className="event-swiper"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`${title} - ${i + 1}`}
              loading="lazy"
              className="event-carousel-img"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
