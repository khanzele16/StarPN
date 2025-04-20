import React from 'react'
import { Card } from '../Card'
import { Widgets } from '../Widgets'

function Home() {
  return (
    <div className='w-full gap-y-[25px] max-w-[500px] flex flex-col justify-center items-center content-center font-[family-name:var(--font-inter)]'>
      <Card />
      <Widgets />
    </div>
  )
}

export default Home
