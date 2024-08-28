"use client";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useState, useEffect, forwardRef, useRef} from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { FaTwitter,FaTelegram,FaDiscord } from "react-icons/fa";

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
  const [rotation, setRotation] = useState<Rotation>({ x: 0, y: 0 });
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
      tl.fromTo(arrowRef.current, 
        { x: "-100%" },  // Start from left edge of the screen
        {
          x: "200vw",    // Move to right edge of the screen
          duration: 20,   // Increased duration for full-screen movement
          ease: "none",
          delay: index * 1.5  // Increased delay between arrows
        },
      0);
    });

    // Title animation using SplitText for individual character bounce
    if (titleRef.current) {
      const split = new SplitText(titleRef.current, { type: "chars" });
      
      gsap.from(split.chars, {
        y: 20,
        opacity: 0.3,
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (clientY - innerHeight / 2) / (innerHeight / 2);
      setRotation({ x: -y * 20, y: x * 20 });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section ref={ref} className={`w-full mx-auto ${props.className}`}>
      <div className="h-svh bg-gradient-to-r from-safety-yellow to-bright-red-c to-60% relative overflow-hidden">
        <div className="flex flex-col space-y-5 lg:flex-row justify-between lg:space-x-10">
          <div ref={bodyRef} className="relative w-full z-10">
            <div className="relative">
              <Image
                src="/main/IpBody_b.png"
                alt="ipbody"
                width={819}
                height={893}
              />
              <div
                className="absolute top-[35%] left-[35%] w-[40%] h-[40%]"
                style={{
                  transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                  transition: "transform 0.1s ease-out",
                }}
              >
                <Image
                  src="/main/IpFace.png"
                  alt="Ipface"
                  width={249}
                  height={275}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="min-h-[400px] flex flex-col justify-between gap-y-6 lg:gap-y-10 text-center lg:text-left z-10">
              <p ref={titleRef} className="uppercase text-white text-3xl lg:text-4xl xl:text-4xl font-bold leading-tight">
                {"Let's build the future together!"}
              </p>
              <div className="flex justify-center lg:justify-start gap-x-6 lg:gap-x-10">
                <FaTwitter className="text-white text-2xl lg:text-3xl xl:text-6xl" />
                <FaTelegram className="text-white text-2xl lg:text-3xl xl:text-6xl" />
                <FaDiscord className="text-white text-2xl lg:text-3xl xl:text-6xl" />
              </div>
            </div>
          </div>
        </div>
        {/* Move arrows outside the existing div structure */}
        <Image
            ref={arrow1Ref}
            src="/main/arrow01.png"
            alt={`arrow01`}
            width={508}
            height={257}
            className="absolute top-[10%]"
          />
          <Image
            ref={arrow2Ref}
            src="/main/arrow02.png"
            alt={`arrow02`}
            width={356}
            height={180}
            className="absolute top-[50%]"
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
    </section>
  );
});

MainSection.displayName = 'MainSection';

export default MainSection;
