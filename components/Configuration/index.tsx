import React from 'react'
import Netherlands from './free-icon-netherlands-3371849.png'
import Image from 'next/image'
export function Configuration() {
    return (
        <div className='w-full max-w-[500px] flex m-auto flex-col'>
            <div className='w-full flex justify-between text-black items-center'>
                <h1 className='text-[#000000] text-[20px]'>Моя конфигурация</h1>
                <p className='text-[#AAAAAA]'>Все</p>
            </div>
            <div className="bg-[#151515] rounded-[5px] mt-[12px] py-[20px] relative">
                <div className='w-full flex justify-between text-black max-w-[450px] m-auto'>
                    <h1 className='text-[#fff]'>Локация</h1>
                    <p className='text-[#fff]'>Протокол</p>
                </div>
                <div className="w-full max-w-[450px] m-auto flex justify-between mt-[20px] items-center">
                    <div className="flex items-center">
                        <Image src={Netherlands} alt="" />
                        <p className='ml-[10px] '>NL,<br />Amsterdam</p>
                    </div>
                    <div className="">
                        <p className='text-[20px] z-10'>VLESS</p>
                    </div>
                </div>
                {/* <svg className='absolute max-w-[100px] top-[15px] right-0' xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 200" fill="none">
                    <g clip-path="url(#clip0_105_560_1745155939808)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M200 100.671L100 0L0 100.671H98.6668L0 200H200L101.333 100.671H200Z" fill="url(#paint0_linear_105_560_1745155939808)" />
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_105_560_1745155939808" x1="20.5" y1="16" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#000000" />
                            <stop offset="1" stop-color="#4242426f" />
                        </linearGradient>
                        <clipPath id="clip0_105_560_1745155939808">
                            <rect width="200" height="200" fill="white" />
                        </clipPath>
                    </defs>
                </svg> */}
            </div>

        </div>
    )
}

