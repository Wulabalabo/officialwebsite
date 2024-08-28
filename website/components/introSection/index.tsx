import Image from "next/image";
import React, { forwardRef } from "react";

interface IntroSectionProps {
  className?: string;
}

const IntroSection = forwardRef<HTMLElement, IntroSectionProps>((props, ref) => {
  return (
    <section ref={ref} className={`max-w-[1920px] mx-auto pt-20 bg-white ${props.className}`}>
      <div className="flex flex-col lg:flex-row w-full lg:px-5 lg:space-x-10">
        <div className="relative flex flex-col lg:p-16 lg:w-1/2 lg:justify-between">
          <div className="relative flex max-w-lg">
            <div className="relative h-48">
              <Image
                src={"/intro/cloud.png"}
                alt={"cloud"}
                width={178}
                height={126}
                style={{ objectFit: "contain" }}
              />
              <Image
                src={"/intro/coin_b.png"}
                alt={"coin_b"}
                width={68}
                height={63}
                style={{ objectFit: "contain" }}
                className="absolute bottom-8 left-5"
              />
            </div>
            <Image
              src={"/intro/logo_2.png"}
              alt={"logo_2"}
              width={347}
              height={91}
              style={{ objectFit: "contain" }}
              className="absolute bottom-5 right-10"
            />
          </div>
          <div>
            <p className="lg:w-[80%] text-xl p-5">
              In the Web3 era, We have the opportunity to create a new world
              where everyone can participate in the economy and share the value
              of the network. We are building a decentralized platform that
              allows users to create, trade, and monetize NFTs. We are committed
              to providing a fair and transparent platform for creators and
              collectors to interact with each other.
            </p>
          </div>
          <div>
            <div className="flex justify-end">
              <Image
                src={"/intro/cloud_2.png"}
                alt={"cloud_2"}
                width={135}
                height={130}
                style={{ objectFit: "contain" }}
              />
              <Image
                src={"/intro/cloud_3.png"}
                alt={"cloud_3"}
                width={196}
                height={176}
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="relative flex flex-col lg:w-1/2">
          <Image
            src={"/intro/cloud_b.png"}
            alt={"cloud_b"}
            width={957}
            height={716}
            style={{ objectFit: "contain" }}
          />
          <Image
            src={"/intro/cpu_effect.png"}
            alt={"cpu_effect"}
            width={691}
            height={182}
            style={{ objectFit: "contain" }}
            className="absolute bottom-1/4 right-0 animate-pulse"
          />
          <Image
            src={"/intro/cpu.png"}
            alt={"cpu"}
            width={803}
            height={283}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
});

IntroSection.displayName = 'IntroSection';

export default IntroSection;
