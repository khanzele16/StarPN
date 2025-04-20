import React from "react";
import Image from "next/image";
import whiteStarIcon from "@/public/white-star.svg";
import starIcon from "@/public/star.svg";

export function Card() {
  return (
    <div className="w-full relative max-w-[500px] min-w-[300px] h-[250px] bg-[#151515] rounded-2xl p-6 shadow-lg text-white flex flex-col justify-between">
      <div className="flex flex-col gap-y-[8px]">
        <p className="text-3xl font-bold">Мой Баланс</p>
        <p className="text-[#c7c7c7] text-xl font-medium">Баланс</p>
      </div>
      <div className="flex flex-col gap-y-[8px]">
        <div className="flex flex-row items-center gap-x-[4px]">
          <Image src={starIcon} className="w-[32px] h-[32px]" alt="" />
          <p className="text-3xl font-bold">190</p>
        </div>
        <p className="text-[#c7c7c7] text-lg font-semibold">/ StarCoin</p>
      </div>
      <Image
        className="absolute bottom-0 right-0 w-[200px] h-[180px] sm:w-[300px] sm:h-[300px]"
        src={whiteStarIcon}
        alt=""
      />
    </div>
  );
}
