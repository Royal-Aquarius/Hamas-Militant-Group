// import React from 'react'

// const page = () => {
//   return (
//     <div>page</div>
//   )
// }

// export default page

export default function ResultPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-6xl">
        <h2 className="text-3xl font-extrabold text-emerald-800 mb-6 text-center">CHECK RESULT STATUS</h2>
        
          {/* Check Result Section */}
          <div className="border p-6 rounded-lg bg-gray-200">
            {/* <h3 className="text-xl font-bold mb-4 text-center">Check Result Status</h3> */}
            <label className="block text-emerald-900 font-semibold">Full Name</label>
            <input type="text" className="w-full p-2 border rounded-lg mb-4" placeholder="Enter Full Name" />
            
            <label className="block text-emerald-900 font-semibold">Email</label>
            <input type="email" className="w-full p-2 border rounded-lg mb-4" placeholder="Enter Email" />
            
            <label className="block text-emerald-900 font-semibold">Application ID</label>
            <input type="text" className="w-full p-2 border rounded-lg mb-4" placeholder="Enter Application ID" />

            <label className="block text-emerald-900 font-semibold">Verification Code</label>
            <input type="text" className="w-full p-2 border rounded-lg mb-4" placeholder="Enter Code" />
            
            <button className="bg-emerald-800 text-white py-2 px-6 font-bold text-lg w-full tracking-widest transition-all hover:translate-y-1">
              GET RESULT
            </button>
          </div>
          </div>
        </div>
  );
}
