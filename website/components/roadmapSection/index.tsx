import React from 'react';
import Image from 'next/image';

const RoadmapSection = () => {
    return (
        <section className='relative flex justify-between items-center max-w-[1920px] mx-auto bg-white overflow-hidden'>
            <div className='p-4 sm:p-8 md:p-16 lg:p-32 flex flex-col md:flex-row justify-between items-center w-full'>
                <Image src={'/roadmap/logo.png'} alt={'logo'} width={182} height={1119} className='hidden md:block mb-8 md:mb-0' />
                <div className='relative w-full h-full'>
                    <div className='relative w-full h-full flex flex-col justify-center items-center'>
                        <h2 className='text-4xl sm:text-6xl lg:text-8xl font-bold text-center mb-8 lg:mb-16 z-10'>ROADMAP</h2>
                        <Image src={'/roadmap/bg.png'} alt={'bg'} width={1920} height={1080} objectFit='contain' className='absolute z-0' />
                        <div className='flex flex-col justify-center items-center space-y-4 sm:space-y-6 lg:space-y-10 z-10'>
                            <p className='text-white text-center text-lg sm:text-2xl lg:text-3xl'>
                                2022 The Business Model of Nextart Aims to Achieve
                            </p>
                        </div>
                    </div>
                    <Image src={'/roadmap/box.png'} alt={'box'} width={300} height={489} className='hidden lg:block absolute right-[1%] z-0' />
                </div>
            </div>
            <Image src={'/roadmap/logo_b.png'} alt={'logo_b'} layout='fill' objectFit='cover' className='hidden 2xl:block absolute z-0' />
        </section>
    )
}

export default RoadmapSection;