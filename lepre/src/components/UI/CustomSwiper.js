import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";
const test = {
  width: "420px",
  height: "400px",
  boxShadow: "0px 10px 30px rgb(219 216 234 / 64%)",
  textAlign: "left",
};
export default function App({ instaImages }) {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={"auto"}
        spaceBetween={5}
      >
        {instaImages.map(({ instaImage, _id }) => (
          <SwiperSlide key={_id} style={test}>
            <div>
              <img
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
                src={require(`../../uploads/${instaImage}`)}
                alt="test"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
