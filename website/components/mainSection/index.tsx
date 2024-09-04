"use client";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useState, useEffect, forwardRef, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { FaTwitter, FaTelegram, FaDiscord } from "react-icons/fa";
import NextartIP from "../NextartIP";

// 确保在组件外部注册 SplitText 插件
gsap.registerPlugin(SplitText);

interface Rotation {
  x: number;
  y: number;
}

interface MainSectionProps {
  className?: string;
}

const MainSection = forwardRef<HTMLElement, MainSectionProps>((props, ref) => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const arrow1Ref = useRef<HTMLImageElement>(null);
  const arrow2Ref = useRef<HTMLImageElement>(null);
  const arrow3Ref = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null)

  useGSAP(() => {
    // Body animation
    gsap.to(bodyRef.current, {
      y: 20,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });

    // Arrows animation
    const tl = gsap.timeline({ repeat: -1 });

    [arrow1Ref, arrow2Ref, arrow3Ref].forEach((arrowRef, index) => {
      gsap.set(arrowRef.current, { x: "-100%" });
      tl.fromTo(arrowRef.current,
        { x: "-10%", opacity: 0 },
        {
          x: "100vw", 
          opacity: 1,
          duration: 10,
          ease: "none",
          delay: index * 1.5
        },
        0);
    });

    // Title animation using SplitText for individual character bounce
    if (titleRef.current) {
      const split = new SplitText(titleRef.current, { type: "chars" });

      gsap.from(split.chars, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
        stagger: {
          each: 0.1,
          from: "random"
        },
        repeat: -1,
        repeatDelay: 2,
        yoyo: true
      });
    }
  }, []);

  return (
    <section ref={ref} className={`${props.className} overflow-hidden`}>
      <div className="h-full bg-gradient-to-r from-safety-yellow to-bright-red-c to-60% relative overflow-hidden flex flex-col justify-center">
        <div className="flex flex-col space-y-5 lg:flex-row justify-between lg:space-x-10">
          <div ref={bodyRef} className="absolute top-0 lg:w-[80%] z-10">
            <NextartIP className="lg:w-[45%] h-auto" />
          </div>
          <div className="w-1/2" />
          <div className="w-full flex justify-center items-center">
            <div className="lg:min-h-[400px] flex flex-col justify-center gap-y-6 lg:gap-y-20 text-center lg:text-left z-10">
              <p ref={titleRef} className="uppercase hidden lg:block lg:text-white text-xl lg:text-4xl xl:text-4xl font-bold leading-tight">
                {"Let's build the future together"}
              </p>
              <div className="flex justify-center lg:justify-start gap-x-6 lg:gap-x-10">
                <FaTwitter className="text-blue-400 lg:text-white text-6xl lg:text-3xl xl:text-6xl" />
                <FaTelegram className="text-blue-400 lg:text-white text-6xl lg:text-3xl xl:text-6xl" />
                <FaDiscord className="text-blue-400 lg:text-white text-6xl lg:text-3xl xl:text-6xl" />
              </div>
            </div>
          </div>
        </div>
        
        {/* 修改箭头容器 */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            ref={arrow1Ref}
            src="/main/arrow01.png"
            alt={`arrow01`}
            width={508}
            height={257}
            className="absolute top-[2%]"
          />
          <Image
            ref={arrow2Ref}
            src="/main/arrow02.png"
            alt={`arrow02`}
            width={356}
            height={180}
            className="absolute top-[38%]"
          />
          <Image
            ref={arrow3Ref}
            src="/main/arrow03.png"
            alt={`arrow03`}
            width={149}
            height={75}
            className="absolute top-[80%]"
          />
        </div>
      </div>
    </section>
  );
});

MainSection.displayName = 'MainSection';

export default MainSection;
