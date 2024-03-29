"use client";
import Image from "next/image";
export default function MainImage({ children, srcImg, classes }) {
  return (
    <div className={`transition-opacity opacity-0 duration-[0.2s] ${classes}`}>
      <Image
        src={srcImg}
        fill
        priority
        loading="eager"
        alt="Main Image"
        className="object-cover"
        onLoadingComplete={(image) =>
          image.parentElement.classList.remove("opacity-0")
        }
      />
      {children}
    </div>
  );
}
