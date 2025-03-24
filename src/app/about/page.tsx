// import React from 'react'

// const page = () => {
//   return (
//     <div>
//       PAGE
//     </div>
//   )
// }

// export default page

// import Image from 'next/image';
// import Abu from '../../../public/SLIDE-4.jpg'

// export default function AboutUs() {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 bg-gray-100">
//       {/* Left Side - Image */}
//       <div className="w-full md:w-1/2 flex justify-center">
//         <Image 
//           src={Abu} 
//           alt="Abu Ubaidaa" 
//           width={800} 
//           height={1200} // Ensure this is increased
//           className="rounded-2xl shadow-lg shadow-black h-[560px]" // Force height
//         />
//       </div>


//       {/* Right Side - Text */}
//       <div className="w-full md:w-1/2 p-6">
//         <h2 className="text-4xl font-bold text-emerald-800 mb-4">About Us</h2>
//         <p className="text-green-900 text-lg font-semibold leading-relaxed text-justify">
//         Hamas (Harakat al-Muqawamah al-Islamiyya), guided by its motto —"The pleasure of Allah is our goal, the Prophet ﷺ is our role model, the Quran is our constitution, Jihad is our path, and martyrdom for the sake of Allah is our highest aspiration"— The Hamas is a Palestinian militant and political organization founded in 1987. It has played a significant role in Palestinian self-determination, focusing on social welfare, governance, and resistance against Israeli occupation. Over the years, it has built an extensive network of schools, hospitals, and charities, providing vital aid to the Palestinian population, particularly in Gaza, where it has governed since 2007. Hamas gained political legitimacy after winning the 2006 Palestinian legislative elections, reflecting popular support for its policies and resistance efforts. Despite facing challenges such as blockades and conflicts, Hamas has actively participated in negotiations and ceasefires, seeking to secure Palestinian rights. The movement is led by Ismail Haniyeh, head of the Political Bureau, and Yahya Sinwar, the leader in Gaza, with guidance from a Shura Council that oversees political and military strategies. Supported by allies like Qatar and Iran, Hamas continues to play a crucial role in shaping Palestinian politics and governance while maintaining its commitment to Palestinian sovereignty and national unity.
//         </p>
//       </div>
//     </div>
//   );
// }


"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Abu from "../../../public/SLIDE-4.jpg";

export default function AboutUs() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY * 0.2); // Adjust parallax intensity
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen bg-gray-100">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/SLIDE-4.jpg')" }}
      />

      <div className="relative flex flex-col md:flex-row items-center justify-center min-h-screen p-15">
        {/* Left Side - Image with Parallax */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image 
            src={Abu} 
            alt="Abu Ubaidaa" 
            width={800} 
            height={1200} 
            className="rounded-2xl shadow-lg shadow-black h-[560px]"
            style={{ transform: `translateY(${offsetY}px)` }}
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 p-4 bg-white bg-opacity-90 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-emerald-800 mb-4">About Us</h2>
          <p className="text-green-900 text-lg font-semibold leading-relaxed text-justify">
          Hamas (Harakat al-Muqawamah al-Islamiyya), guided by its motto —"The pleasure of Allah is our goal, the Prophet ﷺ is our role model, the Quran is our constitution, Jihad is our path, and martyrdom for the sake of Allah is our highest aspiration"— The Hamas is a Palestinian militant and political organization founded in 1987. It has played a significant role in Palestinian self-determination, focusing on social welfare, governance, and resistance against Israeli occupation. Over the years, it has built an extensive network of schools, hospitals, and charities, providing vital aid to the Palestinian population, particularly in Gaza, where it has governed since 2007. Hamas gained political legitimacy after winning the 2006 Palestinian legislative elections, reflecting popular support for its policies and resistance efforts. Despite facing challenges such as blockades and conflicts, Hamas has actively participated in negotiations and ceasefires, seeking to secure Palestinian rights. The movement is led by Ismail Haniyeh, head of the Political Bureau, and Yahya Sinwar, the leader in Gaza, with guidance from a Shura Council that oversees political and military strategies. Supported by allies like Qatar and Iran, Hamas continues to play a crucial role in shaping Palestinian politics and governance while maintaining its commitment to Palestinian sovereignty and national unity.
          </p>
        </div>
      </div>
    </div>
  );
}
