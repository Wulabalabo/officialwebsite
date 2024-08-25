import Image from "next/image";
const phone = () => {
  return (
    <div className="w-[436px] rounded-md bg-gradient-to-r from-safety-yellow to-bright-red-c">
      <div className="p-1 h-[718px] flex rounded-md">
        <div className="z-10 flex flex-col p-5 w-full">
          <Image
            src={"/principle/battery.png"}
            alt={"battery"}
            width={103}
            height={48}
            className="ml-auto"
          />
          <Image
            src={"/logo.png"}
            alt={"logo"}
            width={192}
            height={192}
            className="self-center mt-16"
          />
          <Image
            src={"/NextartLogo.png"}
            alt={"NextartLogo"}
            width={193}
            height={31}
            className="self-center mt-8"
          />
          <p className="text-white text-2xl font-bold mt-5 p-5">
            Next Art is not just a platform, it represents a new paradigm in IP
            incubation with the potential to revolutionize the creative industry
            ecosystem.
          </p>
        </div>

        <div className="bg-black h-[708px] w-[426px] absolute rounded-md"></div>
      </div>
    </div>
  );
};

export default phone;
