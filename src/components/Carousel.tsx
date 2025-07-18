import React from "react";

import { CardCarousel } from "./card-carousel";

const CardCaroursalDemo = () => {
  const images = [
    {
      src: "https://res.cloudinary.com/dvvxpzajh/image/upload/v1752849934/IMG_20250718_200637_lgdbmd.jpg",
      alt: "Portrait 0",
    },
    {
      src: "https://res.cloudinary.com/dvvxpzajh/image/upload/v1752849937/IMG_20250718_200757_fukzrt.jpg",
      alt: "Portrait 1",
    },
    {
      src: "https://res.cloudinary.com/dvvxpzajh/image/upload/v1752849935/IMG_20250718_200702_serakn.jpg",
      alt: "Portrait 2",
    },
    {
      src: "https://res.cloudinary.com/dvvxpzajh/image/upload/v1752849936/IMG_20250718_200413_kgws00.jpg",
      alt: "Portrait 3",
    },
    {
      src: "https://res.cloudinary.com/dvvxpzajh/image/upload/v1752849937/IMG_20250718_200541_jgp4pz.jpg",
      alt: "Portrait 4",
    },
    {
      src: "https://res.cloudinary.com/dvvxpzajh/image/upload/v1752849936/IMG_20250718_200722_ofwkca.jpg",
      alt: "Portrait 5",
    },
    {
      src: "https://res.cloudinary.com/dvvxpzajh/image/upload/v1752849936/IMG_20250718_200518_o37tjg.jpg",
      alt: "Portrait 6",
    },
    {
      src: "https://res.cloudinary.com/dvvxpzajh/image/upload/v1752849935/IMG_20250718_200625_mk7gns.jpg",
      alt: "Portrait 7",
    },
  ];

  return (
    <div className="w-full">
      <CardCarousel
        images={images}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      />
    </div>
  );
};

export default CardCaroursalDemo;
