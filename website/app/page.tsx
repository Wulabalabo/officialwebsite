import IntroSection from "@/components/introSection";
import MainSection from "@/components/mainSection";
import PrincipleSection from "@/components/principleSection";
import SectionCard from "@/components/sectionCard";
import RoadmapSection from "@/components/roadmapSection";

export default function Home() {
  return (
    <main>
      <MainSection></MainSection>
      <IntroSection></IntroSection>
      <PrincipleSection></PrincipleSection>
      <RoadmapSection></RoadmapSection>
      <div className="flex lg:flex-row flex-col w-full justify-between max-w-[1920px] mx-auto">
        <SectionCard
          title={"COMMUNITY & GOVERNANCE"}
          logo={"/community.png"}
          number={"01"}
          classname={"bg-yellow-500 w-full"} url={"/community"}></SectionCard>
        <SectionCard
          title={"TOKEN ECONOMY"}
          logo={"/coin.png"}
          number={"02"}
          classname={"bg-bright-red-c w-full"} url={"/economy"}></SectionCard>
      </div>
    </main>
  );
}
