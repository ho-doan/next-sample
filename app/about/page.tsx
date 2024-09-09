"use client";
import React, { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

import "./index.css";

import {
  EffectCreative,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import ContactComponent from "../components/contact";
import { Colors } from "../theme/colors";

type Props = {};

export default function About(props: Props) {
  let lst = ["000", "ffaabb", "ff44aa"];

  const [index, setIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperClass) => {
    setIndex(swiper.activeIndex);
    console.log("Slide changed to: ", swiper); // Get the active index
  };

  return (
    <div style={{ width: "100%", height: "93%" }}>
      <Swiper
        onSlideChange={handleSlideChange}
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          EffectCreative,
          Mousewheel,
        ]}
        direction="vertical"
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return (
              '<div id="swiper-p" class="' +
              className +
              '"><span>' +
              (index + 1) +
              "</span></div>"
            );
          },
        }}
        mousewheel={true}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        style={{ height: "100%" }}
        // effect={"fade"}
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, "-20%", -1],
          },
          next: {
            translate: [0, "100%", 0],
          },
        }}
      >
        {lst.map((e) => (
          <SwiperSlide
            key={e}
            id={e}
            style={{
              height: "100%",
              display: "flex",
              backgroundColor: `#${e}`,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {e}
          </SwiperSlide>
        ))}
        <SwiperSlide
          key="contact"
          style={{
            height: "100%",
            display: "flex",
            backgroundColor: Colors.background,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ContactComponent activate={index == 3} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
