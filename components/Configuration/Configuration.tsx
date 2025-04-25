import React from "react";
import Image from "next/image";
import Netherlands from "@/public/free-icon-netherlands-3371849.png";

export function Configuration() {
  return (
    <div className="w-full max-w-[500px] flex flex-col gap-y-3">
      <div className="flex justify-between items-center">
        <h1 className="text-[#000000] text-lg">Моя конфигурация</h1>
        <button className="text-sm text-gray-400 hover:text-gray-300 transition cursor-pointer">
          Добавить
        </button>
      </div>
      <div className="bg-[#151515] rounded-xl p-5 flex flex-col gap-y-6 shadow-md">
        <div className="flex justify-between text-white text-sm font-medium">
          <span>Локация</span>
          <span>Протокол</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src={Netherlands}
              alt="Netherlands Flag"
              width={32}
              height={32}
              className="rounded-sm"
            />
            <p className="ml-3 text-white text-sm leading-tight">
              NL,
              <br />
              Amsterdam
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold text-white">VLESS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
