"use client";
import { useRef, RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IntroSection from "@/components/introSection";
import MainSection from "@/components/mainSection";
import PrincipleSection from "@/components/principleSection";
import RoadmapSection from "@/components/roadmapSection";


export default function Home() {
  const containerRef: RefObject<HTMLElement> = useRef(null);
  const mainRef: RefObject<HTMLElement> = useRef(null);
  const introRef: RefObject<HTMLElement> = useRef(null);
  const principleRef: RefObject<HTMLElement> = useRef(null);
  const roadmapRef: RefObject<HTMLElement> = useRef(null);
  // const cardsRef: RefObject<HTMLDivElement> = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const sections: RefObject<HTMLElement>[] = [ introRef, principleRef, roadmapRef,mainRef];

    if (container) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => "+=" + (container.offsetHeight - 141) * (sections.length - 1),
          scrub: true,
          pin: true,
          anticipatePin: 1,
        }
      });

      sections.forEach((sectionRef, index) => {
        if (index > 0 && sectionRef.current) {
          gsap.set(sectionRef.current, { zIndex: 50 + index });
          tl.fromTo(sectionRef.current,
            {
              yPercent: 100,
              opacity: 0
            },
            {
              yPercent: 0,
              opacity: 1,
              ease: "none",
              duration: 1
            },
            index - 1
          );
        }
      });

      // 调整 Cards 的动画
      // if (cardsRef.current) {
      //   gsap.set(cardsRef.current, { opacity: 0, y: 50, zIndex: 100 });
      //   tl.to(cardsRef.current, {
      //     opacity: 1,
      //     y: 0,
      //     duration: 0.5,
      //     ease: "power2.out"
      //   }, ">");
      // }
    }
  }, []);

  return (
    <>
      <main ref={containerRef} className="h-[calc(100vh)] overflow-hidden">        
        <IntroSection ref={introRef} className="absolute top-[141px] left-0 w-full h-full"/>
        <PrincipleSection ref={principleRef} className="absolute top-[141px] left-0 w-full h-full"/>
        <RoadmapSection ref={roadmapRef} className="absolute top-[141px] left-0 w-full h-svh"/>  
        <MainSection ref={mainRef} className="absolute top-[141px] left-0 w-full h-svh"/>      
      </main>
      {/* <div className="flex lg:flex-row flex-col justify-center w-full max-w-[1920px] mx-auto z-[100]">
          <SectionCard
            title={"COMMUNITY & GOVERNANCE"}
            logo={"/community.png"}
            number={"01"}
            classname={"bg-yellow-500 w-full lg:w-[50%]"}
            url={"/community"}
          />
          <SectionCard
            title={"TOKEN ECONOMY"}
            logo={"/coin.png"}
            number={"02"}
            classname={"bg-bright-red-c w-full lg:w-[50%]"}
            url={"/economy"}
          />
        </div> */}
    </>
  );
}
