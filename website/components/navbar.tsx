"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { Menu } from "lucide-react";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null)
  const titleRef = useRef<HTMLParagraphElement>(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    // 分割文本
    const splitText = new SplitText(titleRef.current, { type: "chars" });
    const chars = splitText.chars;

    // 为每个字符设置初始样式
    gsap.set(chars, {
      color: 'white',
      display: 'inline-block',
      opacity: 1,
      y: 0,
    });

    // 创建波浪动画
    const tl = gsap.timeline({
      repeat: -1,
    });

    tl.to(chars, {
      y: -20,
      duration: 0.5,
      stagger: {
        each: 0.05,
        repeat: 1,
        yoyo: true,
      },
      ease: 'sine.inOut',
    });

    // 滚动触发的动画
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: navRef.current,
        start: "50% top",
        end: "600%",
        scrub: true
      }
    });

    scrollTl.to(chars, {
      yPercent: 800,
      opacity: 0,
      duration: 5,
      stagger: 0.05,
      ease: 'power2.inOut',
    })
    .to(navRef.current, {
      yPercent: 0,
      opacity: 1,
      duration: 5
    }, "<");

    // 初始状态设置
    gsap.set(navRef.current, { yPercent: 100, opacity: 0 });

    return () => {
      splitText.revert();
    }
  }, []);

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
      <div className="h-svh flex justify-center items-center bg-black">
        <p ref={titleRef} className="text-9xl uppercase text-white tracking-tighter font-bold opacity-100">
          NEXT ART
        </p>
      </div>
      <div ref={navRef} className=" w-full bg-gray-950 px-4 fixed top-0 left-0 right-0 z-50">
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
      </div>
      {isMenuOpen && (
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
      )}
    </nav>

  );

};

export default Navbar;


