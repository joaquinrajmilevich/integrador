"use client";
import Image from "next/image";
export default function MainImage({ children = "", srcImg }) {
  return (
    <div>
      <Image
        src={srcImg}
        fill
        sizes="(min-width: 808px) 50vw, 100vw"
        style={{
          objectFit: "cover",
        }}
        quality={80}
        priority
        alt="Main Image"
        className="transition-opacity opacity-0 duration-[0.3s]"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
      {children}
    </div>
  );
}
