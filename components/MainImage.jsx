"use client";
import Image from "next/image";
export default function MainImage({ srcImg }) {
  return (
    <Image
      src={srcImg}
      fill
      loading="eager"
      priority
      alt="Main Image"
      className="transition-opacity opacity-0 duration-[0.2s] object-cover"
      onLoadingComplete={(image) => image.classList.remove("opacity-0")}
    />
  );
}
