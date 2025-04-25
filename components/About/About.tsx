import dynamic from "next/dynamic";
import { CSSProperties } from "react";

const Carousel = dynamic(() => import("@/shared/ui/Carousel"), { ssr: false });

const contentStyle: CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

export function About() {
  return (
      <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
  );
}
