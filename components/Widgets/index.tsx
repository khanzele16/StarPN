import { WalletMinimal } from "lucide-react";
import React from "react";

export function Widgets() {
  return (
    <div className="w-full relative max-w-[500px] h-[250px] p-6 flex flex-row justify-between items-center content-center gap-x-[20px] sm:mx-[100px]">
      <div className="w-full flex justify-center content-center items-center gap-x-[6px] rounded-xl p-4 bg-[#898989]">
        <WalletMinimal color="black" size={24} />
        <p className="text-black">Пополнить баланс</p>
      </div>
      <div className="w-full flex justify-center content-center items-center gap-x-[6px] rounded-xl p-4 bg-[#898989]">
        <WalletMinimal color="black" size={24} />
        <p className="text-black">Пополнить баланс</p>
      </div>
    </div>
  );
}
