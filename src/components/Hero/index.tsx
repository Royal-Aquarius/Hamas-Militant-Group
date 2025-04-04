import React from 'react'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import Counter from '../Counter'
import Image from 'next/image'
import Ubaida from '../../../public/Ubaida.png'

const poppins = Poppins ({
    weight: ['300', '400', '500', '800', '900'],
    subsets: ['latin'],
})

const Hero = () => {
  return (
    <div className={'relative z-10 w-full overflow-hidden bg-opacity-75 bg-[url("/GunMan.jpg")] bg-cover bg-center ${poppins.className}'}>
        <div className='absolute inset-0 -z-50 h-full w-full bg-zinc-100 bg-opacity-75'></div>
        <div className='z-50 m-auto mt-6 block w-[95%] items-center justify-between md:flex md:flex-row lg:w-[90%] xl:w-[1300px]'>
            <div className='h-fit w-full pt-5 md:w-1/2 md:py-10'>
            <h1 className='whitespace-nowrap text-center text-[2rem] font-extrabold leading-10 tracking-wider text-green-900 sm:text-5xl sm:leading-none md:text-left lg:text-6xl'>HAMAS</h1>
            <h1 className='whitespace-nowrap text-center text-[1.5rem] font-extrabold leading-none tracking-wider text-green-900 sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem]'>حركة المقاومة الإسلامية <br />كتائب الشهيد عز الدين القسام</h1>
            <h1 className='mt-5 whitespace-nowrap text-center text-[1.5rem] font-extrabold leading-[2rem] tracking-wider text-green-800 sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem]'>
                Hamas Millitant Group
                <br />
                Al-Qassam Brigade
                {/* <br />
                Al-Quds Brigade */}
            </h1>
            {/* <p className='my-5 whitespace-nowrap text-center text-[1.25rem] font-extrabold text-green-900 sm:text-2xl md:text-left'>
                Islam - Resistance - Jihad 
            </p> */}
            <p className='my-5 w-full text-center text-[1.25rem] font-extrabold tracking-wider text-green-900 sm:text-2xl md:w-[80%] md:text-left'>
                Islam - Resistance - Jihad <br />
                Join Military Of Hamas Recruitment is now open!
            </p>
            <div className='mb-7 mt-5 flex flex-col items-center sm:mt-10 sm:flex-row sm:gap-5 md:mb-0'>
                <Link className='w-full md:w-auto' href={"/apply"}>
                <button className='w-full rounded-md bg-emerald-800 py-3 text-center text-sm font-extrabold tracking-widest text-white transition-all hover:translate-y-1 sm:py-4 sm:text-base md:w-52'>
                    JOIN NOW
                </button>
                </Link>
                <Counter/>
            </div>
            </div>
            <div className='relative mt-7 flex w-full items-end justify-center md:m-auto md:justify-end sm:justify-center pr-40'>
                <Image
                src={Ubaida}
                alt='giaic'
                className='md: ml-40 h-auto min-w-[900px] lg:w-[600px]'
                />
            </div>
        </div>
    </div>
  )
}

export default Hero