'use client'

import Image from "next/image";
import starIcon from "@/public/star.svg";
import { useSearchAppParams } from "@/shared/hooks";
import { InputNumber } from "@/shared/ui/InputNumber";
import { Modal } from "@/shared/ui/Modal";
import { Button } from "@/shared/ui/Button";

export function UpBalance() {
  const { getSearchParamValue, editSearchParams } = useSearchAppParams();
  const isShowing = getSearchParamValue("modal") === "add_balance";
  const amounts = [50, 100, 500, 1000];

  return (
    <Modal
      centered
      footer={null}
      open={isShowing}
      onCancel={() => editSearchParams("remove", ["modal"])}
      title={
        <h2 className="text-2xl font-medium text-[#1f1f1f] font-[family-name:var(--font-inter)]">
          Пополнить баланс
        </h2>
      }
    >
      <div className="w-full flex flex-col gap-y-5 text-[#1f1f1f] mt-0 font-[family-name:var(--font-inter)]">
        <div className="flex items-center gap-x-[5px]">
          <Image src={starIcon} alt="StarCoin" width={25} height={25} />
          <p className="text-base">1 StarCoin = 1 ₽</p>
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <label htmlFor="amount" className="text-base font-medium">
            Введите сумму
          </label>
          <InputNumber
            id="amount"
            min={0}
            placeholder="Например, 500"
            style={{ width: "100%", border: '1px solid #dcdcdc' }}
            className="w-full rounded-xl px-4 py-2 text-[#1f1f1f] border border-solid border-[#dcdcdc] bg-[#fff]"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-sm text-[#6c6c6c]">Быстрый выбор:</p>
          <div className="flex flex-wrap gap-3">
            {amounts.map((value) => (
              <Button
                key={value}
                className="rounded-xl px-4 py-2 text-sm transition cursor-pointer"
                type='text'
                style={{ border: '1px solid #dcdcdc' }}
              >
                {value} ₽
              </Button>
            ))}
          </div>
        </div>
        <Button
          variant="solid"
          className="rounded-xl w-full font-semibold bg-[#000] border border-[#000] text-white"
          color="default"
        >
          Пополнить
        </Button>
      </div>
    </Modal>
  );
}
