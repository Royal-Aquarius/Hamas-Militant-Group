// "use client";
// import React, { useState } from 'react'
// import Link from 'next/link';
// import Image from 'next/image';
// import Logo from '../../../public/logo.png';
// import { IoIosArrowDown } from 'react-icons/io';
// import { CompulsoryData } from '@/data/main/compulsory';
// import { tracks } from '@/data/main/tracks';
// import { FiMenu } from 'react-icons/fi';
// import { RxCross1 } from 'react-icons/rx';

// const navLinks = [
//   {title: "home", link:"/", id: "1" },
//   {title: "about us", link:"/about", id: "4" },
//   {title: "apply now", link:"/apply", id: "3" },
//   {title: "check result", link:"/result", id: "2" },
//   {title: "registration slip", link:"/registration", id: "5" },
// ];

// const Header = () => {
//   const [open, setOpen] = useState (false);
//   const [showMenu, setShowMenu] = useState (false); 
//   return (
//     <>
//     <div className='sticky top-0 z-30 w-full bg-emerald-950 backdrop-blur-3xl print:hidden'>
//       <div className='m-auto flex h-16 w-[95%] items-center justify-between md:h-20 lg:w-[90%] xl:w-[1300px]'>
//       <Link href={"/"}>
//       <Image
//       src={Logo}
//       alt='logo'
//       width={90}
//       className='mt-14 w-[70px] sm:mt=20 sm:w-[80px] md:w-[90px]'
//       />
//       </Link>
//       <h1 className='text_shadow hidden text-[15px] font-extrabold text-[#e7e7e7] lg:block xl-lg:text-xl xl:text-2xl'>
//         Hamas Militant Group حركة المقاومة الإسلامية
//       </h1>
//       <h1 className='text_shadow text-[1.125rem] font-extrabold text-[#e7e7e7] lg:hidden'>
//       Hamas Militant Group{" "}
//       </h1>

//       <div className='hidden items-center gap-5 text-[#FAF9F6] sm:flex lg:gap-10'>
//         {navLinks.map((item) => (
//           <Link href={item.link} key={item.id}>
//           <div className='capitalize'>{item.title}</div>
//           </Link>
//         ))}
//         <div className='relative cursor-pointer'onClick={() => setShowMenu(!showMenu)}>
//           <div className='flex items-center capitalize'>
//             Induction <IoIosArrowDown className='pl-2 size-5'/>
//           </div>
//             {showMenu && (
//               <div className='my absolute right-0 mt-2 w-48 rounded-lg bg-white text-black'>
//                 <div className='box_shadow bg-zinc-50 p-7 h-[300px] sm:h-auto overflow-y-auto'>
//                   <h1 className='text-left text-lg font-bold text-black pb-3'>
//                     Military Defense Systems
//                   </h1>
//                   {CompulsoryData.map((val) => (
//                     <Link href={`/compulsory/${val.id}`} key={val.id}>
//                     <div className='py-1 px-2 text-sm text-black hover:text-main'>{val.text}</div>
//                     </Link>
//                   ))}
//                   <h1 className='mt-5 text-left text-lg font-bold text-black border-t border-zinc-300 pt-5 pb-3'>
//                     Military Combat Corps
//                   </h1>
//                   {tracks.map((val) => (
//                     <Link href={`/tracks/${val.id}/4`} key={val.id}>
//                     <div className='py-1 px-2 text-sm text-black hover:text-main'>{val.name}</div>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             )
//             }
//           </div>
//         </div>
//       <div className='block sm:hidden'>
//         <FiMenu size={24} className='text-white' onClick={() => setOpen(true)}/>
//       </div>
//       </div>
//     </div>
//     <div className={`fixed left-0 top-0 z-40 h-full w-full bg-emerald-950 print:hidden ${!open && "hidden"}`}>
//       <div className='absolute right-5 top-5'>
//         <RxCross1 className='text-white' size={25} onClick={() => setOpen(false)}/>
//       </div>
//       <div className='m-auto mt-20 flex w-[90%] flex-col text-base font-normal text-white'>
//         {navLinks.map((item) => (
//           <Link href={item.link} onClick={() => setOpen(false)} key={item.id}>
//             <div className='border-b border-white py-5 capitalize'>{item.title}</div>
//           </Link>
//         ))}
//         <div className={`py-5 ${!showMenu && "border-b"} border-white`} onClick={() => setShowMenu(!showMenu)}>
//         <div className='flex items-center justify-between'>
//           Induction
//           <IoIosArrowDown size={16}/>
//         </div>
//       </div>    
//       <div className={`overflow-y-auto rounded-xl bg-white ${showMenu ? "h-auto" : "h-0 overflow-hidden"}`}>    
//         <h1 className='mt-3 px-2 text-left text-lg font-bold text-zinc-800'>Military Defense Systems</h1>
//         {CompulsoryData.map((val,index) => (
//           <Link onClick={() => setOpen(false)} key={index} href={`/compulsory${val.id}`}>
//             <div className='py-3 pl-2 text-sm text-zinc-600 sm:text-base hover:text-main'>{val.text}</div>
//           </Link>
//         ))}
//         <h1 className='mt-3 px-2 text-left text-lg font-bold text-zinc-800 border-t border-zinc-30 pt-5'>Military Combat Corps</h1>
//         {tracks.map((val,index) => (
//           <Link onClick={() => setOpen(false)} key={index} href={`/tracks${val.id}`}>
//             <div className='py-3 pl-2 text-sm text-zinc-600 sm:text-base hover:text-main'>{val.name}</div>
//           </Link>
        
//       ))}
//     </div>
//       </div>  
//       </div>
//     </>
  
//   )
// }

// export default Header





"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/logo.png';
import { IoIosArrowDown } from 'react-icons/io';
import { CompulsoryData } from '@/data/main/compulsory';
import { tracks } from '@/data/main/tracks';
import { FiMenu } from 'react-icons/fi';
import { RxCross1 } from 'react-icons/rx';

const navLinks = [
  { title: "home", link: "/", id: "1" },
  { title: "about", link: "/about", id: "4" },
  { title: "apply", link: "/apply", id: "3" },
  { title: "result", link: "/result", id: "2" },
  { title: "registration", link: "/registration", id: "5" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <>
      <div className="sticky top-0 z-30 w-full bg-emerald-950 backdrop-blur-3xl print:hidden">
        <div className="m-auto flex h-16 w-[95%] items-center justify-between md:h-20 lg:w-[90%] xl:w-[1300px]">
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="logo"
              width={90}
              className="mt-14 w-[70px] sm:mt-15 sm:w-[80px] md:w-[90px]"
            />
          </Link>
          <h1 className="text_shadow hidden text-[15px] font-extrabold text-[#e7e7e7] lg:block xl-lg:text-xl xl:text-2xl">
            Hamas Militant Group حركة المقاومة الإسلامية
          </h1>
          <h1 className="text_shadow text-[1.125rem] font-extrabold text-[#e7e7e7] lg:hidden">
            Hamas Militant Group{" "}
          </h1>

          <div className="hidden items-center gap-5 text-[#FAF9F6] sm:flex lg:gap-10">
            {navLinks.map((item) => (
              <Link href={item.link} key={item.id}>
                <div className="capitalize">{item.title}</div>
              </Link>
            ))}
            <div className="relative cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
              <div className="flex items-center capitalize">
                Induction <IoIosArrowDown className="pl-2 size-5" />
              </div>
              {showMenu && (
                <div className="absolute right-0 mt-2 w-80 rounded-lg bg-white text-black shadow-lg">
                  <div className="bg-zinc-50 p-4 max-h-[300px] overflow-y-auto">
                    <h1 className="text-lg font-bold text-black pb-3">
                      Military Defense Systems
                    </h1>
                    {CompulsoryData.map((val) => (
                      <Link href={`/compulsory/${val.id}`} key={val.id}>
                        <div className="py-1 px-2 text-sm text-black hover:text-main">{val.text}</div>
                      </Link>
                    ))}
                    <h1 className="mt-5 text-lg font-bold text-black border-t border-zinc-300 pt-5 pb-3">
                      Military Combat Corps
                    </h1>
                    {tracks.map((val) => (
                      <Link href={`/tracks/${val.id}/4`} key={val.id}>
                        <div className="py-1 px-2 text-sm text-black hover:text-main">{val.name}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="block sm:hidden">
            <FiMenu size={24} className="text-white" onClick={() => setOpen(true)} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed left-0 top-0 z-40 h-full w-full bg-emerald-950 print:hidden transition-transform ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="absolute right-5 top-5">
          <RxCross1 className="text-white" size={25} onClick={() => setOpen(false)} />
        </div>
        <div className="m-auto mt-20 flex w-[90%] flex-col text-base font-normal text-white h-screen overflow-y-auto">
          {navLinks.map((item) => (
            <Link href={item.link} onClick={() => setOpen(false)} key={item.id}>
              <div className="border-b border-white py-5 capitalize">{item.title}</div>
            </Link>
          ))}
          <div className={`py-5 border-white ${!showMenu && "border-b"}`} onClick={() => setShowMenu(!showMenu)}>
            <div className="flex items-center justify-between">
              Induction
              <IoIosArrowDown size={16} />
            </div>
          </div>

          {/* Dropdown Menu */}
          <div className={`rounded-xl bg-white transition-all duration-300 ${showMenu ? "max-h-[500px] overflow-y-auto" : "max-h-0 overflow-hidden"}`}>
            <h1 className="mt-3 px-2 text-lg font-bold text-zinc-800">Military Defense Systems</h1>
            {CompulsoryData.map((val, index) => (
              <Link onClick={() => setOpen(false)} key={index} href={`/compulsory/${val.id}`}>
                <div className="py-3 pl-2 text-sm text-zinc-600 sm:text-base hover:text-main">{val.text}</div>
              </Link>
            ))}
            <h1 className="mt-3 px-2 text-lg font-bold text-zinc-800 border-t border-zinc-300 pt-5">
              Military Combat Corps
            </h1>
            {tracks.map((val, index) => (
              <Link onClick={() => setOpen(false)} key={index} href={`/tracks/${val.id}`}>
                <div className="py-3 pl-2 text-sm text-zinc-600 sm:text-base hover:text-main">{val.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;












