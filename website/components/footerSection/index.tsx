"use client";
import React from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import Link from "next/link";
const FooterSection = () => {
    return (
        <section className="max-w-[1920px] mx-auto">
            <div className="container flex justify-between p-5">
                <Image src={"/NextartLogo.png"} alt={"logo"} width={192} height={192}></Image>
                <div className="flex gap-5">
                    <Link href={"https://twitter.com/Nextart_io"} target="_blank">
                    <FaTwitter className="text-white text-2xl">
                        </FaTwitter></Link>
                </div>
            </div>
        </section>
    )
}

export default FooterSection;