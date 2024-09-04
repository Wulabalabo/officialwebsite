import { forwardRef } from "react";
import Image from "next/image";
import TextWithIcon from "../TextWithIcon"
import EconomyContent from "./EconomyContent";

interface EconomySectionProps extends React.HTMLAttributes<HTMLElement> { }
const EconomySection = forwardRef<HTMLElement, EconomySectionProps>((props, ref) => {
    return (
        <section className="bg-gradient-to-r from-yellow-300 to-orange-700 mx-auto">
            {/* Economy */}
            <div className="relative p-10 flex flex-col items-center space-y-10">
                <p className="uppercase lg:text-8xl text-4xl text-white font-bold text-center mb-8 lg:mb-0">
                    Economy
                </p>
                <p className="uppercase text-center lg:text-4xl text-2xl font-bold w-[80%]">
                    It is crucial to ensure that the model supports the project's long-term vision and sustainability.
                </p>
                <div className="flex justify-center lg:space-x-10 space-x-4">
                    <Image src={"/economy/coin_L.png"} alt="Economy" width={348} height={249} style={{ objectFit: "contain" }} className="w-1/2 lg:w-auto" />
                    <Image src={"/economy/coin_R.png"} alt="Economy" width={303} height={249} style={{ objectFit: "contain" }} />
                </div>
            </div>
            {/* Token Economy Model */}
            <div className="bg-white h-full w-full flex flex-col items-center justify-center lg:p-20 lg:space-y-20 space-y-10 p-5">
                <TextWithIcon text="TOKEN ECONOMY MODEL" icon="/coin_b.png" textClassName="lg:text-5xl text-xl font-bold" iconSize={50} />
                <div className="flex lg:flex-row flex-col items-center justify-center lg:space-x-52 lg:space-y-0 space-y-10">
                    <div className="relative lg:w-[400px] lg:h-[400px] w-[200px] h-[200px]">
                        <Image src={"/economy/pie.png"} alt="pie" fill sizes="100vw" style={{ objectFit: "contain" }} />
                    </div>

                    <div className="flex flex-col items-start space-y-6 uppercase p-5 lg:p-0">
                        <TextWithIcon text={<>1.Ecosystem incentives: <span className="text-red-500">45%</span></>} box boxClassName="bg-yellow-500" textClassName="lg:text-2xl font-bold text-left" />
                        <TextWithIcon text={<>2.Private and Public Sales: <span className="text-red-500">18%</span></>} box boxClassName="bg-orange-400" textClassName="lg:text-2xl font-bold text-left" />
                        <TextWithIcon text={<>3.Team and Advisors: <span className="text-red-500">15%</span></>} box boxClassName="bg-orange-600" textClassName="lg:text-2xl font-bold text-left" />
                        <TextWithIcon text={<>4.Reserve Fund: <span className="text-red-500">10%</span></>} box boxClassName="bg-red-700" textClassName="lg:text-2xl font-bold text-left" />
                        <TextWithIcon text={<>5.Liquidity provision: <span className="text-red-500">6%</span></>} box boxClassName="bg-red-500" textClassName="lg:text-2xl font-bold text-left" />
                        <TextWithIcon text={<>6.Marketing: <span className="text-red-500">4%</span></>} box boxClassName="bg-yellow-300" textClassName="lg:text-2xl font-bold text-left" />
                        <TextWithIcon text={<>7.Technical Development: <span className="text-red-500">2%</span></>} box boxClassName="bg-yellow-200" textClassName="lg:text-2xl font-bold text-left" />
                    </div>
                </div>
            </div>
            {/* Tokenomics Details */}
            <div className="bg-white h-full w-full flex flex-col items-center justify-center lg:p-20 lg:space-y-20 space-y-10 p-5">
                <EconomyContent title={"Ecosystem incentives: 45%"} titleNumber={"1. "} titleDescription={["Creator Rewards: 20%", "User Participation Rewards: 20%", "Community Development Fund: 5%"]} content={"This is the largest allocation as the health of the ecosystem is crucial to the project's success. A high proportion of creator rewards can arract quality content; user participation rewards encourage active community engagement; and the community development fund supports long-term ecosystem building."} contentTitle={"Rationale"} />
                <EconomyContent title={"Private and Public Sales: 18%"} titleNumber={"2. "} titleDescription={["Private Sale: 12%", "Public Sale: 6%"]} content={"This Portion provides initial funding and liquidity for the project. the slightly higher private sale allocation can attract strategic investors and institutional support, while the public sale ensures broader community involvment."} contentTitle={"Rationale"} />
                <EconomyContent title={"Team and Advisors: 15%"} titleNumber={"3. "} titleDescription={["Core Team: 13.5%", "Advisors: 1.5%"]} content={"This allocation is sufficient to motivate the team for long-term commitment to the project while avoiding over-concentration. typically, there should be a lock-up period of 3~4 years, with gradual vesting to ensure the team's long-term dedication."} contentTitle={"Rationale"} />
                <EconomyContent title={"Reserve Fund: 10%"} titleNumber={"4. "} titleDescription={[""]} content={"this portion serves as a strategic reserve for the project, to be used for future market changes, new opportunities, or unforeseen circumstances. of 3~4 years, with gradual vesting to ensure the team's long-term dedication."} contentTitle={"Rationale"} />
                <EconomyContent title={"liquidity provision: 6%"} titleNumber={"5. "} titleDescription={[""]} content={"used  to provide initial liquidity on decentralized/centralized exchanges, ensuring trading liquidity after the token is listed"} contentTitle={"Rationale"} />
                <EconomyContent title={"marketing: 4%"} titleNumber={"6. "} titleDescription={[""]} content={"allocated for promoting the platform and arrating new users and creators. this is a relatively small proportion as we rely more on organic ecosystem growth"} contentTitle={"Rationale"} />
                <EconomyContent title={"technical development: 2%"} titleNumber={"7. "} titleDescription={[""]} content={"although a small proportion, this is specifically allocated for the development of the platform's technical infrastructure, ensuring a robust and secure foundation for the project's growth and sustainability."} contentTitle={"Rationale"} />
            </div>
            <div className="bg-white h-full w-full flex flex-col items-center justify-center lg:space-y-20 space-y-10">
                <div className="hidden lg:block">
                    <div className="flex items-center justify-center space-x-10">
                        <Image src={"/logo.png"} alt="logo" width={70} height={70} />
                        <Image src={"/logoText.png"} alt="logoText" width={449} height={70} />
                    </div>
                </div>
                <div className="bg-bright-red-c w-full h-full lg:p-20 p-5 flex flex-col items-start justify-center lg:space-y-10 space-y-5">
                    <TextWithIcon text="TOKEN Release Mechanism" icon="/coin_w.png" textClassName="uppercase text-white lg:text-5xl text-xl font-bold" iconSize={50} iconClassName="invert" />
                    <div className="flex flex-col items-start justify-center space-y-5">
                        <TextWithIcon text={<>1. Ecosystem Incentives: <span className="font-normal">Linear release over 5 years</span></>} textClassName="uppercase lg:text-2xl font-bold text-left text-white" />
                        <TextWithIcon text={<>2. Private Sale: <span className="font-normal">6-Month lock-up followed by linear release over 2 years</span></>} textClassName="uppercase lg:text-2xl font-bold text-left text-white" />
                        <TextWithIcon text={<>3. public sale: <span className="font-normal">tradable upon listing</span></>} textClassName="uppercase lg:text-2xl font-bold text-left text-white" />
                        <TextWithIcon text={<>4. team and advisors: <span className="font-normal">1-year lock-up followed by linear release over 3 years</span></>} textClassName="uppercase lg:text-2xl font-bold text-left text-white" />
                        <TextWithIcon text={<>5. reserve fund: <span className="font-normal">usage decided by dao governance</span></>} textClassName="uppercase lg:text-2xl font-bold text-left text-white" />
                        <TextWithIcon text={<>6. liquidity provision: <span className="font-normal">released upon listing</span></>} textClassName="uppercase lg:text-2xl font-bold text-left text-white" />
                        <TextWithIcon text={<>7. marketing: <span className="font-normal">linear release over 2 years</span></>} textClassName="uppercase lg:text-2xl font-bold text-left text-white" />
                        <TextWithIcon text={<>8. technical development: <span className="font-normal">linear release over 2 years</span></>} textClassName="uppercase lg:text-2xl font-bold text-left text-white" />
                    </div>
                </div>

            </div>
        </section>
    )
})

EconomySection.displayName = 'EconomySection';

export default EconomySection;
