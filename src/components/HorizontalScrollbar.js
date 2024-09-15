import React from "react";
import { Navigation } from "swiper/modules";
import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";
import { Swiper, SwiperSlide } from "swiper/react";
import useMediaQuery from "@mui/material/useMediaQuery";

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:900px)");

  const slidesPerView = isSmallScreen ? 1 : isMediumScreen ? 2 : 3;

  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={40}
      loop={true}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {data.map((item) => (
        <SwiperSlide
          key={item.id || item}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {bodyParts ? (
            <BodyPart
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HorizontalScrollbar;
