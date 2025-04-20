import React from 'react'

export function Configuration() {
    return (
        <div className='w-full max-w-[500px] flex m-auto flex-col'>
            <div className='w-full flex justify-between text-black'>
                <h1 className='text-[#000000]'>Моя конфигурация</h1>
                <p className='text-[#AAAAAA]'>Все</p>
            </div>
            <div className="bg-[#151515] rounded-[5px] mt-[12px]">
                <div className='w-full flex justify-between text-black max-w-[450px] m-auto py-[10px]'>
                    <h1 className='text-[#fff]'>Локация</h1>
                    <p className='text-[#fff]'>Протокол</p>
                </div>
                <div className="">
                    
                </div>
            </div>
        </div>

    )
}

