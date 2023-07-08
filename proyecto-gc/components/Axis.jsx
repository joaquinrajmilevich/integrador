"use client";
import Image from "next/image";
import growthIcon from "@/public/wireframe-07.svg";
import knowIcon from "@/public/wireframe-06.svg";
import teamIcon from "@/public/wireframe-08.svg";
import DefaultAnimation from "@/components/DefaultAnimation";

export default function Axis({ width }) {
  return (
    <>
      <div>
        <Image src={growthIcon} className={`w-[${width}]`} />
        <h4>Crecimiento</h4>
      </div>
      <div className="">
        <Image src={knowIcon} className={`w-[${width}]`} />
        <h4>Conocimiento</h4>
      </div>
      <div>
        <Image src={teamIcon} className={`w-[${width}]`} />
        <h4>Compañerismo</h4>
      </div>
    </>
  );
}
