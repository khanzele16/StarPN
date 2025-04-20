import { KeyRound, WalletMinimal } from "lucide-react";
import React from "react";

export function Widgets() {
  return (
    <div className="w-full flex flex-row justify-between items-center content-center gap-x-[20px] sm:mx-[100px]">
      <div className="w-full flex justify-center content-center items-center gap-x-[8px] rounded-xl p-4 shadow-md bg-[#fff] border border-solid border-[#c2c2c2]">
        <WalletMinimal color="black" size={25} />
        <p className="text-lg text-black">Пополнить баланс</p>
      </div>
      <div className="w-full flex justify-center content-center items-center gap-x-[8px] rounded-xl p-4 shadow-md bg-[#fff] border border-solid border-[#c2c2c2]">
        <KeyRound color="black" size={25} />
        <p className="text-lg text-black">Мои ключи</p>
      </div>
    </div>
  );
}
