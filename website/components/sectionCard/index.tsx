'use client'
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/dist/client/components/navigation";

interface SectionCardProps {
  title: string;
  logo: string;
  number: string;
  classname: string;
  url:string;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, logo, number, classname,url }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(url);

  };
  return (
    <div className={`${classname}`}>
      <div className="flex flex-col p-20 items-center space-y-10">
        <div className="flex space-x-5 items-center">
          <p className="text-6xl text-white font-bold">{number}</p>
          <div className="bg-gray-500 w-1 h-24"></div>
          <div className="flex flex-col lg:flex-row items-center justify-center space-x-5 h-48">
            <p className="text-2xl text-white font-bold">{title}</p>
            <Image src={logo} alt={"logo"} width={150} height={113}></Image>
          </div>
        </div>
        <Button size={"lg"} className="mr-[50%]" onClick={handleClick}>ENTER</Button>
      </div>
    </div>
  );
}

export default SectionCard;