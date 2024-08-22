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
    <section className="min-h-screen bg-[url('/main/Bg.png')]  bg-center relative overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between min-h-screen  lg:space-x-10">
        <div className="relative w-full lg:w-2/5 h-[80vh] lg:h-svh">
          <div className="relative w-full h-full z-10">
            <Image
              src="/main/IpBody.png"
              alt="ipbody"
              fill
              sizes="(max-width: 819px) 100vw, 40vw"
              style={{ objectFit: "cover" }}
            />
            <div
              className="absolute top-[30%] left-[30%] w-[40%] h-[40%]"
              style={{
                transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <Image
                src="/main/IpFace.png"
                alt="Ipface"
                fill
                sizes="(max-width: 1024px) 40vw, 16vw"
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/5 flex justify-center items-center">
          <div className="flex flex-col justify-center gap-y-6 lg:gap-y-10 text-center lg:text-left">
            <Image
              src="/main/BigTitle.png"
              alt="BigTitle"
              width={857}
              height={0}
              style={{ height: "auto", objectFit: "contain" }}
              className="mt-4 lg:mt-16"
            />
            <p className="uppercase text-3xl lg:text-4xl xl:text-6xl font-bold leading-tight">
              {"Let's build the future of art together!"}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full absolute inset-0 pointer-events-none">
        {[15, 50, 93].map((top, index) => (
          <div
            key={index}
            className={`absolute transform -translate-y-1/2 w-[100vw] overflow-hidden z-${
              index * 10 - 10
            }`}
            style={{ top: `${top}%` }}
          >
            <Image
              src="/main/arrow.png"
              alt={`arrow-${index}`}
              width={index === 0 ? 50 : index === 1 ? 30 : 10}
              height={0}
              className={`w-full h-auto animate-move-right-infinite
                ${
                  index === 0
                    ? "max-h-24"
                    : index === 1
                    ? "max-h-12"
                    : "max-h-8"
                }`}
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              style={{
                height: "auto",
                animationDuration: `${5 + index * 5}s`,
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainSection;
