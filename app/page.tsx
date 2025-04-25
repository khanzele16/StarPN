"use client";

import Home from "@/components/Home";
import { UpBalance } from "@/components/UpBalance";

export default function Page() {
  return (
    <div className='flex justify-center content-center items-center'>
      <Home />
      <UpBalance />
    </div>
  )
}
