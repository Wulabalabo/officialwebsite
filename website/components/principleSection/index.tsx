import { forwardRef } from "react";
import Phone from "./phone";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

interface PrincipleSectionProps {
  className?: string;
}

const PrincipleSection = forwardRef<HTMLElement, PrincipleSectionProps>((props, ref) => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#principle-section",
        start: "top center",
        end: "bottom bottom",
        markers:true,
        scrub: true,
      }
    });

    scrollTl.fromTo("#principle-section", {
      backgroundColor: "white",
      duration: 0.5,
      ease: "power1.inOut",
    },
    {
      backgroundColor: "red",
    }).fromTo("#principle-section-content", {
      opacity: 0,
      duration: 0.2,
      ease: "power1.inOut",
    },
    {
      opacity: 1,
    });
    scrollTl.fromTo("#principle-section-phone", {
      x: -150,
      duration: 1,
      ease: "power1.inOut",
    },
    {
      x: 0,
    }).fromTo("#principle-section-content-text", {
      x: 150,
      opacity:0,
      duration: 1,
      ease: "power1.inOut",
    },
    {
      x: 0,
      opacity:1,
      y:-10,
    });
  });
    return (
      <section ref={ref} id="principle-section" className={`bg-bright-red-c  mx-auto ${props.className}`}>
        <div id="principle-section-content" className="relative p-10 flex flex-col">
          <p className="text-4xl text-white font-bold text-center mb-8 lg:mb-0 lg:text-8xl">
            CORE PRINCIPLES
          </p>
          <div className="flex flex-col space-y-10 lg:flex-row lg:justify-center lg:space-x-20 items-center relative">
            <div className="absolute bg-white lg:w-[70%] rounded-[60px] h-[400px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div id="principle-section-phone" className="self-center z-10">
              <Phone></Phone>
            </div>
            <div className="z-10 text-white lg:text-black">
              <div id="principle-section-content-text" className="flex flex-col space-y-2">
                <p className="text-black text-xl font-bold">
                  Empowring Creators
                </p>
                <p className="text-sm">
                  Giving creators more control over their IPs
                </p>
                <p className="text-black text-xl font-bold">
                  Democratizing Investment
                </p>
                <p className="text-sm">
                  Alloing ordinary users to participate in early-stage IP
                  investments
                </p>
                <p className="text-black text-xl font-bold">
                  Community-Driven
                </p>
                <p className="text-sm">
                  Participate in IP development decisions
                  through DAO mechanisms
                </p>
                <p className="text-black text-xl font-bold">
                  Transparency and Fairness
                </p>
                <p className="text-sm">
                  Ensuring fair distribution of profits through smart contracts
                </p>
                <p className="text-black text-xl font-bold">
                  Incentivizing Innovation
                </p>
                <p className="text-sm">
                  Encouraging continuous innovation through token incentives
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-5 right-[5%] hidden lg:block">
            <Image
              src={"/principle/arrow_w.png"}
              alt={"arrow_b"}
              width={42}
              height={85}
            ></Image>
            <Image
              src={"/principle/arrow_w.png"}
              alt={"arrow_b"}
              width={42}
              height={85}
            ></Image>
          </div>
          <div id="principle-section-bg" className="absolute hidden lg:block top-0 left-0 w-full h-full overflow-hidden">
            <Image
              src={"/principle/bg.png"}
            alt={"bg"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{objectFit: "cover"}}
          ></Image>
          </div>
        </div>
      </section>
    );
});

PrincipleSection.displayName = 'PrincipleSection';

export default PrincipleSection;