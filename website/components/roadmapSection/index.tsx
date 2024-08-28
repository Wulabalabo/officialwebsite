'use client'
import React, { forwardRef } from 'react';
import Image from 'next/image';

interface RoadmapSectionProps {
  className?: string;
}

const RoadmapSection = forwardRef<HTMLElement, RoadmapSectionProps>((props, ref) => {
    return (
        <section ref={ref} className={`relative flex flex-col justify-between items-center max-w-[1920px] mx-auto bg-white overflow-hidden h-[1000px] ${props.className}`}>
            <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-center mt-8 z-10'>ROADMAP</h2>
            <div className='flex-1 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col md:flex-row justify-between items-center w-full'>
                <Image src={'/roadmap/logo.png'} alt={'logo'} width={120} height={480} className='hidden md:block mb-4 md:mb-0' />
                <div className='relative flex-1 h-full'>
                    <div className='relative w-full h-full flex flex-col justify-center items-center'>
                        <Image src={'/roadmap/bg.png'} alt={'bg'} width={1000} height={562} style={{objectFit: 'contain'}} className='absolute -top-[10%] z-0' />
                        <div className='flex flex-col h-full lg:pt-20 justify-start items-center space-y-2 sm:space-y-3 lg:space-y-4 z-10'>
                            <p className='text-white text-center text-sm sm:text-base lg:text-2xl'>
                                2020 The Business Model of Nextart Aims to Achieve
                            </p>
                            <p className='text-white text-center text-sm sm:text-base lg:text-2xl'>
                                2021 The Business Model of Nextart Aims to Achieve
                            </p>
                            <p className='text-white text-center text-sm sm:text-base lg:text-2xl'>
                                2022 The Business Model of Nextart Aims to Achieve
                            </p>
                            <p className='text-white text-center text-sm sm:text-base lg:text-2xl'>
                                2023 The Business Model of Nextart Aims to Achieve
                            </p>
                            <p className='text-white text-center text-sm sm:text-base lg:text-2xl'>
                                2024 The Business Model of Nextart Aims to Achieve
                            </p>
                        </div>
                    </div>
                    <Image src={'/roadmap/box.png'} alt={'box'} width={300} height={244} className='hidden lg:block absolute right-[10%] bottom-[5%] z-10' />
                </div>
            </div>
            <Image src={'/roadmap/logo_b.png'} alt={'logo_b'} width={1440} height={1080} objectFit='cover' className='hidden xl:block absolute bottom-20 z-0' />
        </section>
    )
});

RoadmapSection.displayName = 'RoadmapSection';

export default RoadmapSection;