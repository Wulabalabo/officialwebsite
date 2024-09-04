import Image from "next/image";

const IntroLeft = () => {
    return (
        <div className="relative flex flex-col lg:justify-between">
        <div className="relative flex max-w-lg">
          <div className="relative h-48">
            <Image
              src={"/intro/cloud.png"}
              alt={"cloud"}
              width={178}
              height={126}
              style={{ objectFit: "contain" }}
              className="w-auto h-auto"
            />
            <Image
              src={"/intro/coin_b.png"}
              alt={"coin_b"}
              width={68}
              height={63}
              style={{ objectFit: "contain",width:"auto" }}
              className="absolute bottom-8 left-5 w-auto h-auto"
            />
          </div>
          <Image
            src={"/intro/logo_2.png"}
            alt={"logo_2"}
            width={347}
            height={91}
            style={{ objectFit: "contain" }}
            className="absolute bottom-5 right-10 w-auto h-auto"
          />
        </div>
        <div>
          <p className="text-xl p-5">
          In the Web3 era, we have the opportunity to leverage blockchain technology and smart contracts to redefine the process of IP creation, incubation, and monetization. NEXTART was born to address these challenges as a decentralized IP incubation platform. By integrating blockchain technology, NFTs, and the concept of DAOs, NEXTART rebalances the rights and responsibilities of all participants involved in IP incubation.<span className="text-xl font-bold"> Let&apos;s collaborate to create a native IP for the Web3 world!</span>
          </p>
        </div>
        <div>
          <div className="flex justify-end">
            <Image
              src={"/intro/cloud_2.png"}
              alt={"cloud_2"}
              width={135}
              height={130}
              sizes="100vw"
              style={{ objectFit: "contain",width:"auto" }}
              className="w-auto h-auto"
            />
            <Image
              src={"/intro/cloud_3.png"}
              alt={"cloud_3"}
              width={196}
              height={176}
              style={{ objectFit: "contain" }}
              className="w-auto h-auto"
            />
          </div>
        </div>
      </div>
    )
}

export default IntroLeft;