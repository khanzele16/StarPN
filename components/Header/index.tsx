import { FC } from "react";
import starIcon from "@/public/star.svg";
import Image from "next/image";

export const Header: FC = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center content-center font-[family-name:var(--font-inter)]">
      <div className="w-full my-6 px-6 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-x-[5px]">
          <Image className='w-[32px] h-[32px]' src={starIcon} alt='' />
          <p className='text-2xl font-bold text-black'>StarPN</p>
        </div>
        <div className="flex flex-row gap-x-[6px]">
          <p className="text-ml font-semibold text-black">khanzele</p>
        </div>
      </div>
    </div>
  );
};
