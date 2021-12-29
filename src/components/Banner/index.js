import React from "react";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.css";
// install Swiper modules
SwiperCore.use([Pagination]);

const Banner = ({ id, title, movies }) => {
  return (
    <>
      <div className="bannerContainer">
        <div className="bannerTitle">{title}</div>
        <Swiper key={`${id}_${title}`} slidesPerView={9} spaceBetween={10}>
          {movies.map((movie, index) => {
            return (
              <>
                <SwiperSlide key={movie.titleId}>
                  <img
                    key={`${movie.titleId}_img`}
                    src={movie.thumbnails["thumb-677x474"]?.url}
                    className="thumbnail"
                    alt={movie.title}
                  />
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
