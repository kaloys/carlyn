import "./anniversary-gallery.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FlippableCard } from "../flippable-card/FlippableCard";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay } from "swiper/modules";

export const AnniversaryGallery = ({ srcImages, description }) => {
  return (
    <div className="row">
      <div className="swiper-column">
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          lazyPreloadPrevNext={true}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Autoplay]}
          className="swiper_container"
        >
          {srcImages.map((img, i) => (
            <SwiperSlide key={i}>
              <FlippableCard src={img.src} description={img.description} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="description-column">
        <p>{description}</p>
      </div>
    </div>
  );
};
