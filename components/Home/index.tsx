import { Suspense } from "react";
import { Card } from "../Card/index";
import { Widgets } from "../Widgets/index";
import { Configuration } from "../Configuration/index";
import Footer from "../Footer";
import { About } from "../About";

function Home() {
  return (
    <div className="w-full gap-y-[14px] max-w-[500px] mx-[20px] flex flex-col justify-center items-center content-center font-[family-name:var(--font-inter)] mb-[80px] sm:mx-[100px]">
      <Card />
      <Widgets />
      {/* <About /> */}
      <Configuration />
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  );
}

export default Home;
