// import React from 'react'

// const page = () => {
//   return (
//     <div>page</div>
//   )
// }

// export default page


export default function ApplyNow() {
  return (
    
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-6xl">

      <div className="border p-6 rounded-lg bg-gray-200">
        <h2 className="text-3xl font-extrabold text-emerald-800 mb-6 text-center">APPLY NOW</h2>
        <form className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-emerald-900 font-semibold">Full Name</label>
            <input type="text" className="w-full p-2 border rounded-lg" placeholder="Enter your full name" />
          </div>
          <div>
            <label className="block text-emerald-900 font-semibold">Email</label>
            <input type="email" className="w-full p-2 border rounded-lg" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block text-emerald-900 font-semibold">Phone Number</label>
            <input type="tel" className="w-full p-2 border rounded-lg" placeholder="Enter your phone number" />
          </div>
          <div>
            <label className="block text-emerald-900 font-semibold">Address</label>
            <input type="text" className="w-full p-2 border rounded-lg" placeholder="Enter your address" />
          </div>
          <div>
            <label className="block text-emerald-900 font-semibold">Date of Birth</label>
            <input type="date" className="w-full p-2 border rounded-lg" />
          </div>
          <div>
            <label className="block text-emerald-900 font-semibold">Gender</label>
            <select className="w-full p-2 border rounded-lg">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-emerald-900 font-semibold">Education</label>
            <input type="text" className="w-full p-2 border rounded-lg" placeholder="Enter your highest qualification" />
          </div>
          <div>
            <label className="block text-emerald-900 font-semibold">Work Experience</label>
            <textarea className="w-full p-2 border rounded-lg" placeholder="Enter your work experience"></textarea>
          </div>
          <div className="col-span-2">
            <label className="block text-emerald-900 font-semibold">Upload Resume</label>
            <input type="file" className="w-full p-2 border rounded-lg" />
          </div>
          <div className="col-span-2 flex justify-center">
            <button type="button" className="bg-emerald-800 text-white py-2 px-6 font-bold text-lg w-full tracking-widest transition-all hover:translate-y-1">
              SUBMIT APPLICATION
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}