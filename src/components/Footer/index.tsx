import React from 'react'
import Link from 'next/link';
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
       <footer className='bg-emerald-950 np py-8 px-10 text-gray-300 flex justify-around'>
        <div className='mt-10 mb-10 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div>
                <h3 className='text-xl font-bold mb-4'> Military Defense Systems </h3>
                <ul className='space-y-2 text-lg'>
                    <Link href="#"><li className='py-1'>Electronic Warfare Systems</li></Link>
                    <Link href="#"><li className='py-1'>Rocket and Mortar Defense</li></Link>
                    <Link href="#"><li className='py-1'>Ballistic Missiles System</li></Link>
                    <Link href="#"><li className='py-1'>Tunnel Defense Network</li></Link>
                </ul>
            </div>
            <div>
            <h3 className='text-xl font-bold mb-4'> Military Combat Corps </h3>
            <ul className='space-y-2 text-lg'> 
                <Link href="#"><li className='py-1'>Guerilla Brigade</li></Link>
                <Link href="#"><li className='py-1'>Ammunition & Weaponry</li></Link>
                <Link href="#"><li className='py-1'>Ghoul Sniper</li></Link>
                <Link href="#"><li className='py-1'>Elite Brigade</li></Link>
                <Link href="#"><li className='py-1'>Suicide Bombers</li></Link>
                <Link href="#"><li className='py-1'>Al-Fatah Brigade</li></Link>
                <Link href="#"><li className='py-1'>Anti Israel Brigade</li></Link>
                <Link href="#"><li className='py-1'>Al-Qassam Defense Exhibition</li></Link>
            </ul>
            </div>
            <div>
            <h3 className='text-xl font-bold mb-4'> Social Links </h3>
            <div className='flex space-x-4 mb-4 py-1'>
                <Link href="#"><FaFacebookF className='text-white w-6 h-6 rounded-full bg-blue-800 pt-1 pb-1'/></Link>
                <Link href="#"><FaYoutube className='text-white w-6 h-6 rounded-full bg-red-600 pt-1 pb-1'/></Link>
                <Link href="#"><FaTwitter className='text-white w-6 h-6 rounded-full bg-blue-400 pt-1 pb-1'/></Link>
                <Link href="#"><FaInstagram className='instagram text-white w-6 h-6 rounded-full pt-1 pb-1'/></Link>
                <Link href="#"><FaTiktok className='text-white w-6 h-6 rounded-full bg-black pt-1 pb-1'/></Link>
            </div>
            <Link href="mailto:education@governorsindh.com" target="_blank" className='text-gray-300 underline flex items-center gap-3'>
            <AiOutlineMail className='size-6'/>hamas@alqassam.com</Link>
            </div>
        </div>
       </footer>
    </div>
  )
}

export default Footer