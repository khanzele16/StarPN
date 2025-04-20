import React, { Suspense } from "react";
import { Card } from "../Card";
import { Widgets } from "../Widgets";
import { Configuration } from "../Configuration";
import { Footer } from "../Footer";

function Home() {
  return (
    <div className="w-full gap-y-[14px] max-w-[500px] mx-[20px] flex flex-col justify-center items-center content-center font-[family-name:var(--font-inter)] sm:mx-[100px]">
      <Card />
      <Widgets />
      <Configuration />
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  );
}

export default Home;
