import React from "react";

import { CardCarousel } from "./card-carousel";

const CardCaroursalDemo = () => {
  const images = [
    {
      src: "https://res.cloudinary.com/dvvxpzajh/image/upload/v1752416742/WhatsApp_Image_2025-07-12_at_12.59.46_PM_ynyudg.jpg",
      alt: "Portrait 0",
    },
    {
      src: "https://res.cloudinary.com/dvvxpzajh/image/upload/v1752416742/WhatsApp_Image_2025-07-12_at_12.59.47_PM_y77vtx.jpg",
      alt: "Portrait 1",
    },
    {
      src: "https://res.cloudinary.com/dvvxpzajh/image/upload/v1752416365/WhatsApp_Image_2025-07-12_at_12.59.38_PM_sntufj.jpg",
      alt: "Portrait 2",
    },
    {
      src: "https://res.cloudinary.com/dvvxpzajh/image/upload/v1752416738/WhatsApp_Image_2025-07-12_at_1.00.05_PM_fg0s0l.jpg",
      alt: "Portrait 3",
    },
    {
      src: "https://res.cloudinary.com/dvvxpzajh/image/upload/v1752416736/WhatsApp_Image_2025-07-12_at_1.00.46_PM_1_wzgc1k.jpg",
      alt: "Portrait 4",
    },
    {
      src: "https://res.cloudinary.com/dvvxpzajh/image/upload/v1752577648/WhatsApp_Image_2025-07-15_at_4.35.28_PM_1_irtvrd.jpg",
      alt: "Portrait 5",
    },
    {
      src: "https://res.cloudinary.com/dvvxpzajh/image/upload/v1752577649/WhatsApp_Image_2025-07-15_at_4.35.28_PM_ydnxhh.jpg",
      alt: "Portrait 6",
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
