import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Guerilla from '../../../public/Gorillas.jpg'
import Supplies from '../../../public/Ammunation.jpg'
import Shooter from '../../../public/Snipers.png'
import EliteGc from '../../../public/Elite Group.jpg'
import SuicideAttacker from '../../../public/SuicideAttack.jpg'
import Fatah from '../../../public/Fateh.jpg'
import Exhibition from '../../../public/Exhibition.jpg'
import AntiIsrael from '../../../public/Ghoul.jpg'

const Advance = () => {
  return (
    <div className='xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-20 mb-10'>
        <h1 className='lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-green-800 font-extrabold mt-10'>Military Combat Corps</h1>
        <div className='grid xl-lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 xl-lg:gap-10 gap-5 mt-10'>


            <Link href={'/tracks/gw/4'} className='hover:scale-105 duration-200 transition-all'>
            <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
                <div>
                    <Image alt='Guerilla Warfare' src={Guerilla} className='object-cover w-full' height={'300'} />
                </div>
                <div className='px-4 flex justify-center items-center h-[70px]'>
                    <p>
                        Guerilla Brigade
                    </p>
                </div>
            </div>
            </Link>

            <Link href={'/tracks/aw/4'} className='hover:scale-105 duration-200 transition-all'>
            <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
                <div>
                    <Image alt='Ammunition & Weaponry' src={Supplies} className='object-cover w-full' height={'300'} />
                </div>
                <div className='px-4 flex justify-center items-center h-[70px]'>
                    <p>
                        Ammunition & Weaponry
                    </p>
                </div>
            </div>
            </Link>

            <Link href={'/tracks/gs/4'} className='hover:scale-105 duration-200 transition-all'>
            <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
                <div>
                    <Image alt='Ghoul Sniper' src={Shooter} className='object-cover w-full' height={'300'} />
                </div>
                <div className='px-4 flex justify-center items-center h-[70px]'>
                    <p>
                        Ghoul Sniper
                    </p>
                </div>
            </div>
            </Link>

            <Link href={'/tracks/eb/4'} className='hover:scale-105 duration-200 transition-all'>
            <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
                <div>
                    <Image alt='Elite Brigade' src={EliteGc} className='object-cover w-full' height={'300'} />
                </div>
                <div className='px-4 flex justify-center items-center h-[70px]'>
                    <p>
                        Elite Brigade
                    </p>
                </div>
            </div>
            </Link>

            <Link href={'/tracks/sb/4'} className='hover:scale-105 duration-200 transition-all'>
            <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
                <div>
                    <Image alt='Suicide Bombers' src={SuicideAttacker} className='object-cover w-full' height={'300'} />
                </div>
                <div className='px-4 flex justify-center items-center h-[70px]'>
                    <p>
                        Suicide Bomber
                    </p>
                </div>
            </div>
            </Link>

            <Link href={'/tracks/afb/4'} className='hover:scale-105 duration-200 transition-all'>
            <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
                <div>
                    <Image alt='Al-Fatah Brigade' src={Fatah} className='object-cover w-full' height={'300'} />
                </div>
                <div className='px-4 flex justify-center items-center h-[70px]'>
                    <p>
                        Al-Fatah Brigade
                    </p>
                </div>
            </div>
            </Link>

            <Link href={'/tracks/ais/4'} className='hover:scale-105 duration-200 transition-all'>
            <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
                <div>
                    <Image alt='Anti Israel Squad' src={AntiIsrael} className='object-cover w-full' height={'300'} />
                </div>
                <div className='px-4 flex justify-center items-center h-[70px]'>
                    <p>
                        Anti Israel Brigade
                    </p>
                </div>
            </div>
            </Link>

            <Link href={'/tracks/aqde/4'} className='hover:scale-105 duration-200 transition-all'>
            <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
                <div>
                    <Image alt='Al-Qassam Defense Exhibition' src={Exhibition} className='object-cover w-full' height={'300'} />
                </div>
                <div className='px-4 flex justify-center items-center h-[70px]'>
                    <p>
                        Al-Qassam Defense Exhibition
                    </p>
                </div>
            </div>
            </Link>

        </div>
    </div>
  )
}

export default Advance