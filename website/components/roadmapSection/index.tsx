'use client'
import React, { forwardRef } from 'react';
import Image from 'next/image';

interface RoadmapSectionProps {
    className?: string;
}

const RoadmapSection = forwardRef<HTMLElement, RoadmapSectionProps>((props, ref) => {
    return (
        <section ref={ref} className={`relative flex flex-col justify-between items-center max-w-[1920px] mx-auto bg-white overflow-hidden h-[100vh] ${props.className}`}>

            <div className='flex-1 p-4 sm:p-6 md:p-8 lg:p-8 flex flex-col md:flex-row justify-center items-center w-full'>
                <div className='relative flex-1 h-full'>
                    <div className='relative w-full h-full flex flex-col justify-start lg:space-y-16 items-center'>
                        <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-center z-10'>ROADMAP</h2>
                        <div className='flex flex-col  w-[600px] justify-center space-y-2 sm:space-y-3 lg:space-y-4 z-10 text-black font-bold'>
                            <p className='text-center text-sm sm:text-base lg:text-xl'>
                                2020 The Business Model of Nextart Aims to Achieve
                            </p>
                            <p className='text-center text-sm sm:text-base lg:text-xl'>
                                2021 The Business Model of Nextart Aims to Achieve
                            </p>
                            <p className=' text-center text-sm sm:text-base lg:text-xl'>
                                2022 The Business Model of Nextart Aims to Achieve
                            </p>
                            <p className=' text-center text-sm sm:text-base lg:text-xl'>
                                2023 The Business Model of Nextart Aims to Achieve
                            </p>
                            <p className=' text-center text-sm sm:text-base lg:text-xl'>
                                2024 The Business Model of Nextart Aims to Achieve
                            </p>
                        </div>
                        <Image src={'/roadmap/box.png'} alt={'box'} width={300} height={244} className='hidden lg:block self-end mr-[10%] z-10' />
                    </div>
                </div>
            </div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex'>
                <Image src={'/roadmap/logo.png'} alt={'logo'} width={80} height={200} className='hidden md:block mb-4 md:mb-0 absolute top-1/2 left-[10%] transform -translate-y-1/2 z-10' />
                {/* <Image src={'/roadmap/bg.png'} alt={'bg'} width={1000} height={562} style={{ objectFit: 'contain' }} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0' /> */}
                <Image src={'/roadmap/logo_b.png'} alt={'logo_b'} width={1440} height={1080} objectFit='cover' className='hidden xl:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0' />
            </div>


        </section>
    )
});

RoadmapSection.displayName = 'RoadmapSection';

export default RoadmapSection;