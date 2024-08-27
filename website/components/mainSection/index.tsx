"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Rotation {
  x: number;
  y: number;
}

const MainSection: React.FC = () => {
  const [rotation, setRotation] = useState<Rotation>({ x: 0, y: 0 });

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
    <section className="max-w-[1920px] mx-auto">
      <div className="bg-gradient-to-r from-safety-yellow to-bright-red-c to-60% relative overflow-hidden">
        <div className="flex flex-col space-y-5 lg:flex-row justify-between lg:space-x-10">
          <div className="relative w-full">
            <div className="relative z-10">
              <Image
                src="/main/IpBody.png"
                alt="ipbody"
                width={819}
                height={893}
              />
              <div
                className="absolute top-[35%] left-[35%] w-[40%] h-[40%]"
              // style={{
              //   transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              //   transition: "transform 0.1s ease-out",
              // }}
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
            <div className="flex flex-col gap-y-6 lg:gap-y-10 text-center lg:text-left z-10">
              <Image
                src="/main/BigTitle.png"
                alt="BigTitle"
                width={857}
                height={134}
              />
              <p className="uppercase text-3xl lg:text-4xl xl:text-6xl font-bold leading-tight">
                {"Let's build the future of art together!"}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full inset-0 pointer-events-non">
          <Image
            src="/main/arrow01.png"
            alt={`arrow01`}
            width={508}
            height={257}
            className="absolute top-[2%] left-[40%]"
          />

          <Image
            src="/main/arrow02.png"
            alt={`arrow02`}
            width={356}
            height={180}
            className="absolute top-[50%] left-[60%]"
          />
          <Image
            src="/main/arrow03.png"
            alt={`arrow03`}
            width={149}
            height={75}
            className="absolute top-[90%] left-[90%]"
          />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
