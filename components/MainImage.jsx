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
      />
      {children}
    </div>
  );
}
