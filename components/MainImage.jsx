"use client";
import Image from "next/image";
export default function MainImage({ children = "", srcImg, blur = false }) {
  return (
    <div>
      <Image
        src={srcImg}
        fill
        sizes="(min-width: 808px) 50vw, 100vw"
        style={{
          objectFit: "cover",
        }}
        quality={100}
        priority={true}
        alt="Main Image"
        className={blur ? "blur-md sm:blur-0" : ""}
      />
      {children}
    </div>
  );
}
