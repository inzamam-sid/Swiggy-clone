// import { useNavigate } from "react-router-dom";

// const Profile = () => {
//   const navigate = useNavigate(); // Hook for navigation

//   return (
//     <div className="flex min-h-screen">
      
//       <div
//         className="hidden md:flex w-1/2 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://static.vecteezy.com/system/resources/previews/022/176/800/non_2x/cute-white-bear-3d-animation-created-by-generative-ai-technology-free-photo.jpg')",
//         }}
//       ></div>

     
//       <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-10">
//         <h2 className="text-2xl font-bold text-gray-900">Sign in to Foddies</h2>

//         <button className="flex items-center justify-center w-full mt-6 px-4 py-2 border rounded-lg shadow-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
//           <img
//             src="https://th.bing.com/th?id=OIP.Y2rxC3_cXwXQioty4coiZwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
//             alt="Google"
//             className="w-5 h-5 mr-2"
//           />
//           Sign in with Google
//         </button>

//         <div className="flex items-center w-full my-4">
//           <hr className="flex-grow border-gray-300" />
//           <span className="mx-4 text-gray-400">or sign in with email</span>
//           <hr className="flex-grow border-gray-300" />
//         </div>

//         <div className="w-full">
//           <label className="block text-gray-700">Username or Email</label>
//           <input
//             type="text"
//             className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
//           />

//           <label className="block text-gray-700 mt-4">Password</label>
//           <input
//             type="password"
//             className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
//           />
//           <a
//             href="#"
//             className="flex items-center justify-center text-sm text-purple-600 hover:underline mt-2"
//           >
//             Forgot?
//           </a>
//         </div>

//         <div className="flex items-center justify-center w-full gap-4 mt-6">
//           <button className="w-1/2 bg-black text-white py-2 rounded-lg hover:bg-gray-800">
//             Sign In
//           </button>
//         </div>

//         <p className="mt-4 text-gray-600">
//           Don't have an account?{" "}
//           <span
//             className="text-purple-600 hover:underline cursor-pointer"
//             onClick={() => navigate("/signup")}
//           >
//             Sign up
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Profile;