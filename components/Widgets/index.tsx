import { KeyRound, WalletMinimal } from "lucide-react";
import React from "react";

export function Widgets() {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-x-[16px] gap-y-[12px] sm:mx-[100px]">
      <div className="w-full flex justify-center items-center min-w-[200px] gap-x-[8px] rounded-xl p-4 shadow-md bg-[#fff] border border-solid border-[#c2c2c2]">
        <WalletMinimal
          color="black"
          className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]"
        />
        <p className="text-base sm:text-lg text-black">Пополнить баланс</p>
      </div>
      <div className="w-full flex justify-center items-center min-w-[200px] gap-x-[8px] rounded-xl p-4 shadow-md bg-[#fff] border border-solid border-[#c2c2c2]">
        <KeyRound
          color="black"
          className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]"
        />
        <p className="text-base sm:text-lg text-black">Мои ключи</p>
      </div>
    </div>
  );
}
