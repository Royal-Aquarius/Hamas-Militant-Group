import React from 'react'
import Image from 'next/image'
import Solo1 from '../../../public/WEB-1.jpg'
import Solo2 from '../../../public/WEB-2.jpg'
import Solo3 from '../../../public/WEB-3.jpg'
import Slider from '../Slider'

const Text = () => {
  return (
    <div className='xl:w-[1300px] lg:w-[90%] w-[95%] m-auto sm:mt-20 mt-10 border-b border-zinc-300 pb-10'>
        <h1 className='text-center xl:text-[36px] sm:text-[32px] text-xl sm:leading-[2.5rem] leading-[1.75rem] text-green-800 font-extrabold m-auto md:w-[95%]'>Join The Hamas Militant Al-Qassam Brigade As A Brave Soldier <br /> Defend The Nation, Uphold Honor and Serve With Pride and Courage</h1>
        <p className='sm:mt-10 mt-7 mb-8 xl:text-[1.25rem] sm:text-[1.2rem] text-[1rem] text-green-800 sm:tracking-wider tracking-normal text-justify'>The Hamas Militant Group is a symbol of strength, offering individuals the chance to serve Palestine while gaining exceptional skills and experiences. By joining the Hamas Militant Group Al-Qassam Brigade, recruits become part of a respected institution dedicated to national security, sovereignty, and regional stability. The hamas provides world-class training in various fields, from combat to technical expertise, empowering recruits with leadership and discipline. Hamas defense systems are state-of-the-art, ensuring the protection of the Al-Aqsa and Palestine. With advanced air, land, and sea capabilities, along with robust intelligence and cyber defense, the militants maintains the country’s security and global standing. Serving in the Hamas Military provides the honor of defending the nation, as well as access to comprehensive benefits, including healthcare, education, and career development. Recruits have the opportunity to grow both personally and professionally, gaining experiences that will serve them for a lifetime. By joining the Hamas Militant Group, individuals become a part of a proud legacy, dedicated to preserving peace, protecting borders, and ensuring a secure future for the nation.</p>
        <div className='grid sm:grid-cols-3 grid-cols-1 gap-5 mt-10 m-3 sm:m-0'>
            <Image src={Solo1} alt="solo1" className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full"></Image>
            <Image src={Solo2} alt="solo2" className="shadow-2xl shadow-black rounded-lg h-[300px] w-full"></Image>
            <Image src={Solo3} alt="solo3" className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full"></Image>
        </div>
        <Slider/>
    </div>
  )
}

export default Text