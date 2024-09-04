"use client";
import { useRef, RefObject } from "react";
import IntroSection from "@/components/introSection";
import MainSection from "@/components/mainSection";
import PrincipleSection from "@/components/principleSection";
import EconomySection from "@/components/economySection";

export default function Home() {

  const containerRef: RefObject<HTMLElement> = useRef(null);

  return (
    <>
      <main ref={containerRef} className="h-[calc(full-141px)] overflow-hidden">
        <div>
          <IntroSection className="" />
          <PrincipleSection className="" />
          <EconomySection className="" />
          <MainSection className="h-[calc(70svh)] lg:h-[calc(100svh)]" />
        </div>
      </main>
    </>
  );
}
