import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

/**
 * Bright image carousel for event sections.
 * Rounded corners, crossfade, autoplay.
 */
export default function EventSlider({ images = [], title = "" }) {
  if (!images.length) return null;

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      loop={images.length > 1}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      speed={1200}
      allowTouchMove={false}
      className="ev-slider"
    >
      {images.map((src, i) => (
        <SwiperSlide key={i}>
          <img
            src={src}
            alt={`${title} - photo ${i + 1}`}
            className="ev-slider__img"
            loading="lazy"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
