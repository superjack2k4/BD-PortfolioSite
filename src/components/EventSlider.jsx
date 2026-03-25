import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

/**
 * Full-screen immersive background image slider.
 * Used as the background layer of each EventSection.
 */
export default function EventSlider({ images = [], title = "" }) {
  if (!images.length) return null;

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      loop={images.length > 1}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      speed={1200}
      allowTouchMove={false}
      className="event-slider"
    >
      {images.map((src, i) => (
        <SwiperSlide key={i}>
          <div
            className="event-slider__img"
            style={{ backgroundImage: `url(${src})` }}
            role="img"
            aria-label={`${title} - photo ${i + 1}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
