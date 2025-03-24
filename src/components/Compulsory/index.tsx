import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ElectronicWarfare from '../../../public/PF-1.jpg'
import MortersRockets from '../../../public/NJ-1.jpg'
import Ballistics from '../../../public/EL-1.jpg'
import TunnelNetwork from '../../../public/Tunnel Sys.jpg'

const Compulsory = () => {
  return (
    <div className='xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-10 mb-10'>
        <h1 className='lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-green-800 font-extrabold mt-10'>Military Defense Systems</h1>

        <div className='grid xl-lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 xl-lg:gap-10 gap-5 mt-10'>
            <Link href={'/Compulsory/1'} className='hover:scale-105 duration-200 transition-all'>
            <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
              <div>
                <Image alt='programming fundamentals' src={ElectronicWarfare} className='object-cover w-full' height={'300'}></Image>
              </div>
              <div className='px-4 flex justify-center items-center h-[70px]'>
                <p>
                  Electronic Warfare Systems
                </p>
              </div>
            </div>
            </Link>
            <Link href={'/compulsory/2'} className='hover:scale-105 duration-200 transition-all'>
            <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
              <div>
                <Image alt='nextjs' src={MortersRockets} className='object-cover w-full' height={'300'}/>
              </div>
              <div className='px-4 flex justify-center items-center h-[70px]'>
                <p>
                  Rocket and Mortar Defense
                </p>
              </div>
            </div>
            </Link>
            <Link href={'/compulsory/3'} className='hover:scale-105 duration-200 transition-all'>
            <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
              <div>
                <Image alt='nextjs' src={Ballistics} className='object-cover w-full' height={'300'}/>
              </div>
              <div className='px-4 flex justify-center items-center h-[70px]'>
                <p>
                  Ballistic Missiles System
                </p>
              </div>
            </div>
            </Link>
            <Link href={'/compulsory/4'} className='hover:scale-105 duration-200 transition-all'>
            <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
              <div>
                <Image alt='nextjs' src={TunnelNetwork} className='object-cover w-full' height={'300'}/>
              </div>
              <div className='px-4 flex justify-center items-center h-[70px]'>
                <p>
                  Tunnel Defense Network
                </p>
              </div>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Compulsory