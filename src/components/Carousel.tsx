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
    {
      src: "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753800199/WhatsApp_Image_2025-07-29_at_7.51.05_PM_tkffva.jpg",
      alt: "Portrait 8",
    },
    {
      src: "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753800202/WhatsApp_Image_2025-07-29_at_7.51.06_PM_bfkrkv.jpg",
      alt: "Portrait 9",
    },
    {
      src: "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753800198/WhatsApp_Image_2025-07-29_at_7.51.05_PM_1_cvdypy.jpg",
      alt: "Portrait 10",
    },
    {
      src: "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753800197/WhatsApp_Image_2025-07-29_at_7.51.06_PM_1_mx2jto.jpg",
      alt: "Portrait 10",
    },
    {
      src: "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753800195/WhatsApp_Image_2025-07-29_at_7.51.09_PM_1_wj7fye.jpg",
      alt: "Portrait 10",
    },
    {
      src: "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753800199/WhatsApp_Image_2025-07-29_at_7.51.05_PM_2_z9hxrg.jpg",
      alt: "Portrait 10",
    },
    {
      src: "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753800197/WhatsApp_Image_2025-07-29_at_7.51.09_PM_2_dnju2b.jpg",
      alt: "Portrait 10",
    },
    {
      src: "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753800197/WhatsApp_Image_2025-07-29_at_7.51.06_PM_2_hnaf66.jpg",
      alt: "Portrait 10",
    },
    {
      src: "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753800198/WhatsApp_Image_2025-07-29_at_7.51.10_PM_2_kwk98h.jpg",
      alt: "Portrait 10",
    },
    {
      src: "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753800195/WhatsApp_Image_2025-07-29_at_7.51.09_PM_enlywg.jpg",
      alt: "Portrait 10",
    },
    {
      src: "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753800195/WhatsApp_Image_2025-07-29_at_7.51.07_PM_1_iq7nfr.jpg",
      alt: "Portrait 10",
    },
    {
      src: "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753800195/WhatsApp_Image_2025-07-29_at_7.51.07_PM_3_sru1ny.jpg",
      alt: "Portrait 10",
    },
    {
      src: "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753800194/WhatsApp_Image_2025-07-29_at_7.51.10_PM_1_bfmhtx.jpg",
      alt: "Portrait 10",
    },
    {
      src: "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753800194/WhatsApp_Image_2025-07-29_at_7.51.08_PM_cfteof.jpg",
      alt: "Portrait 10",
    },
    {
      src: "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753800194/WhatsApp_Image_2025-07-29_at_7.51.08_PM_1_ccife2.jpg",
      alt: "Portrait 10",
    },
    {
      src: "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753800193/WhatsApp_Image_2025-07-29_at_7.51.10_PM_kj3zav.jpg",
      alt: "Portrait 10",
    },
    {
      src: "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753800192/WhatsApp_Image_2025-07-29_at_7.51.10_PM_3_fyprds.jpg",
      alt: "Portrait 10",
    },
 
  ];

  return (
    <div className="w-full">
      <CardCarousel
        images={images}
        autoplayDelay={2000}
        showPagination={false}
        showNavigation={true}
      />
    </div>
  );
};

export default CardCaroursalDemo;
