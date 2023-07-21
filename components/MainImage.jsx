"use client";
import Image from "next/image";
export default function MainImage({ children = "", srcImg }) {
  return (
    <>
      <Image
        src={srcImg}
        fill
        quality={80}
        priority
        alt="Main Image"
        className="transition-opacity opacity-0 duration-[0.3s] object-cover"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
      {children}
    </>
  );
}
