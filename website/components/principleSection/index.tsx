import Phone from "./phone";
import Image from "next/image";


const PrincipleSection = () => {
    return (
      <section className="bg-bright-red-c">
        <div className="relative">
          <div className="flex flex-col p-10">
            <p className="self-center text-5xl text-white font-bold">
              CORE PRINCIPLES
            </p>
            <div className="absolute top-[30%] self-center w-4/6 h-1/2 bg-white rounded-[60px]">
              <div className="absolute top-10 left-5">
                <Image
                  src={"/principle/arrow_b.png"}
                  alt={"arrow_b"}
                  width={42}
                  height={85}
                ></Image>
                <Image
                  src={"/principle/arrow_b.png"}
                  alt={"arrow_b"}
                  width={42}
                  height={85}
                ></Image>
              </div>
              <Image
                src={"/principle/box.png"}
                alt={"box"}
                width={224}
                height={214}
                className="absolute -bottom-20 -left-36 z-20"
              ></Image>
            </div>

            <div className="flex w-4/6 space-x-16 justify-center self-center z-20">
              <div className="lg:scale-75 w-2/5">
                <Phone></Phone>
              </div>
              <div className="self-center w-3/5">
                <div className="flex flex-col space-y-2">
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

            <div className="absolute bottom-5 right-[5%]">
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

            <Image
              src={"/principle/bg.png"}
              alt={"bg"}
              width={1440}
              height={900}
              className="absolute top-10 max-w-screen-xl self-center"
            ></Image>
          </div>
        </div>
      </section>
    );
}


export default PrincipleSection;