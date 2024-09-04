import React, { forwardRef } from "react";
import NextartCpu from "./NextartCpu";
import IntroLeft from "./IntroLeft";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

interface IntroSectionProps {
  className?: string;
}

const IntroSection = forwardRef<HTMLElement, IntroSectionProps>((props, ref) => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#intro-section",
        start: "top center",
        end: "bottom bottom",
        markers: true,
        scrub: true,
      }
    });
    
    scrollTl.fromTo("#intro-section", {
      opacity: 0,
      duration: 0.2,
      ease: "bounce.out",
    },{
      opacity: 1,
    }).fromTo("#intro-left", {
      opacity: 0,
      x:-100,
      duration: 0.5,
      ease: "bounce.out",
    },{
      opacity: 1,
      x: 0,
    });
    scrollTl.fromTo("#intro-right", {
      opacity: 0,
      y:100,
      duration: 1,
      ease: "bounce.out",
    },{
      opacity: 1,
      y:0
    });
  });
  return (
    <section ref={ref} id="intro-section" className={`w-full mx-auto p-5  bg-white ${props.className}`}>
      <div className="flex flex-col lg:justify-between lg:flex-row lg:space-x-28">
        <div id="intro-left" className="relative lg:w-2/5 h-auto lg:p-20">
          <IntroLeft />
        </div>
        <div id="intro-right" className="hidden lg:block relative lg:w-3/5 lg:h-auto">
          <NextartCpu />
        </div>
      </div>
    </section>
  );
});

IntroSection.displayName = 'IntroSection';

export default IntroSection;
