import Image from "next/image";
import { ComponentProps } from "../../types";
import { forwardRef } from "react";


const NextartCpu = forwardRef<HTMLDivElement, ComponentProps>((props, ref) => {
    return (
        <div ref={ref} className={`relative w-full h-full flex flex-col items-center ${props.className}`}>
            <div className="h-4/6 w-full relative">
                <Image
                    src={"/intro/cloud_b.png"}
                    alt={"cloud_b"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "contain" }}
                />
            </div>
            <div className="h-1/6 w-full relative ">
                <Image
                    src={"/intro/cpu_effect.png"}
                    alt={"cpu_effect"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "contain" }}
                />
            </div>
            <div className="h-1/6 w-full relative self-end">
                <Image
                    src={"/intro/cpu.png"}
                    alt={"cpu"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "contain" }}
                    className="mr-auto"
                />
            </div>
        </div >
    )
})

NextartCpu.displayName = "NextartCpu";

export default NextartCpu;