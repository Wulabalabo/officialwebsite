import Image from "next/image";
import { ComponentProps } from "../types";
import { forwardRef } from "react";

    
const NextartIP = forwardRef<HTMLDivElement, ComponentProps>((props, ref) => {
    return (
        <div ref={ref} className={`relative w-full h-full ${props.className}`}>
            <Image
                src="/BigCloud.png"
                alt="BigCloud"
                width={819}
                height={893}
            />
        </div>
    )
})

NextartIP.displayName = "NextartIP";

export default NextartIP;