import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const ImageSlider = () => {
    return (
      <div class="adjust-slider">
        <Swiper
        slidesPerView={2}
        onSlideChange={() => 
          console.log('slide change')}
        scrollbar={{ draggable: true }}
        className="is-flex centered"
        > 
          <SwiperSlide>
              <StaticImage src="../images/videos-screen.png" alt="videos" className="mx-auto"/>
          </SwiperSlide>
          <SwiperSlide>
              <StaticImage src="../images/channel-screen.png" alt="channels"/>
          </SwiperSlide>
        </Swiper>
      </div>
    )
  }
  export default ImageSlider;