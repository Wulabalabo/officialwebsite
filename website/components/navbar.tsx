"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { Menu } from "lucide-react";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { create } from 'zustand';
import { FaAngleDown} from "react-icons/fa6";

// 创建一个简单的状态存储
interface NavbarStore {
  animationComplete: boolean
  setAnimationComplete: (complete: boolean) => void
}

export const useNavbarStore = create<NavbarStore>((set) => ({
  animationComplete: false,
  setAnimationComplete: (complete) => set({ animationComplete: complete }),
}))

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useGSAP(() => {
    if (imagesLoaded === 7) { // 7 is the total number of images
      gsap.registerPlugin(ScrollTrigger);

      const letters = gsap.utils.toArray<HTMLImageElement>('.logo-letter');
      
      // 保留原有的弹跳动画
      letters.forEach((letter, index) => {
        gsap.to(letter, {
          y: -25,
          duration: 1,
          ease: "elastic.out",
          delay: index * 0.1,
          repeat: -1,
          yoyo: true
        });
      });

      // 创建一个新的时间轴用于滚动动画
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: navRef.current,
          start: "top center",
          end: "bottom top",
          markers: true,
          scrub: true,
        }
      });

      // 添加滚动动画到时间轴
      scrollTl.to(".logo-container", {
        y: 500, // 在当前y位置基础上向下移动
        opacity: 0,
        stagger: 0.05,
        ease: "power2.in"
      });
    }
  }, { dependencies: [imagesLoaded], scope: navRef });

  const handleImageLoad = () => {
    setImagesLoaded(prev => prev + 1);
  };

  const handleButtonClick = (link: string) => {
    router.push(link);
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Community & Governance", link: "/community" },
    { name: "Token Economy", link: "/token" },
  ];

  return (
    <nav>
      <div ref={navRef} className="h-svh flex justify-center items-center bg-black">
        <div className="logo-container flex space-x-4 w-screen justify-center scale-[45%] lg:scale-[100%]">
          <Image src="/logoText/N.png" alt="NextartLogo" width={102} height={127.5} className="logo-letter" onLoad={handleImageLoad} priority />
          <Image src="/logoText/E.png" alt="NextartLogo" width={99} height={127.5} className="logo-letter" onLoad={handleImageLoad} priority />
          <Image src="/logoText/X.png" alt="NextartLogo" width={102} height={127.5} className="logo-letter" onLoad={handleImageLoad} priority />
          <Image src="/logoText/FT.png" alt="NextartLogo" width={101.5} height={127.5} className="logo-letter" onLoad={handleImageLoad} priority />
          <Image src="/logoText/A.png" alt="NextartLogo" width={122} height={127.5} style={{marginLeft: "50px"}} className="logo-letter" onLoad={handleImageLoad} priority />
          <Image src="/logoText/R.png" alt="NextartLogo" width={95.5} height={127.5} className="logo-letter" onLoad={handleImageLoad} priority />
          <Image src="/logoText/T.png" alt="NextartLogo" width={101.5} height={127.5} className="logo-letter" onLoad={handleImageLoad} priority />
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <FaAngleDown className="text-white text-4xl animate-bounce" />
      </div>
      {/*<div ref={navRef} className=" w-full bg-gray-950 px-4 fixed top-0 left-0 right-0 z-50">
        <div className="lg:h-[149px] flex container justify-between items-center">
          <div className="flex-shrink-0">
            <Image
              src={"/NextartLogo.png"}
              alt={"NextartLogo"}
              width={203}
              height={0}
              className="w-[204px]"
            />
          </div>
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <Button
                key={item.name}
                className="text-white text-lg lg:text-2xl"
                variant={"link"}
                onClick={() => handleButtonClick(item.link)}
              >
                {item.name}
              </Button>
            ))}
          </div>
          <Button
            className="md:hidden text-white"
            variant={"ghost"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </Button>
        </div> 
      </div>*/}
      {/* {isMenuOpen && (
        <div className="md:hidden mt-4">
          {navItems.map((item) => (
            <Button
              key={item.name}
              className="text-white text-lg w-full justify-start"
              variant={"ghost"}
              onClick={() => handleButtonClick(item.link)}
            >
              {item.name}
            </Button>
          ))}
        </div>
      )} */}
    </nav>

  );

};

export default Navbar;


