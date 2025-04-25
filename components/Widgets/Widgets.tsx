'use client'

import { useSearchAppParams } from "@/shared/hooks";
import { KeyRound, WalletMinimal } from "lucide-react";
import React from "react";

export function Widgets() {
  const { editSearchParams } = useSearchAppParams()
  return (
    <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-x-[16px] gap-y-[12px] sm:mx-[100px]">
      <div onClick={() => {
        editSearchParams('add', [['modal', 'add_balance']])
      }} className="w-full flex justify-center items-center min-w-[200px] gap-x-[6px] rounded-xl p-3 shadow-md bg-[#fff] border border-solid border-[#c2c2c2] cursor-pointer transition-colors duration-300 hover:bg-[#f8f8f8]">
        <WalletMinimal
          color="black"
          className="w-[20px] h-[20px]"
        />
        <p className="text-base text-black">Пополнить баланс</p>
      </div>
      <div className="w-full flex justify-center items-center min-w-[200px] gap-x-[6px] rounded-xl p-3 shadow-md bg-[#fff] border border-solid border-[#c2c2c2] cursor-pointer transition-colors duration-300 hover:bg-[#f8f8f8]">
        <KeyRound
          color="black"
          className="w-[20px] h-[20px]"
        />
        <p className="text-base text-black">Мои ключи</p>
      </div>
    </div>
  );
}
