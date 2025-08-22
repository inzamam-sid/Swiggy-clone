const Contact = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">Contact US Page</h1>
            <form>
              <input type="text" className="border border-black p-2 m-2" placeholder="name"/>
              <input type="text" className="border border-black p-2 m-2" placeholder="message"/>
              <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">Submit</button>
              
            </form>
        </div>

    );
};

export default Contact;





// const Contact = () => {
//   return (
//     <div className="max-w-lg mx-auto bg-white p-6 shadow-md shadow-amber-300 rounded-lg">
//       <h2 className="text-xl font-semibold mb-4">Feel Free to Contact Us</h2>
//       <form className="space-y-5">
//         <input
//           type="text"
//           placeholder="Enter Your Name"
//           className="w-full p-2 border border-gray-300 rounded-md"
//         />
//         <input
//           type="tel"
//           placeholder="Enter Your Phone Number"
//           className="w-full p-2 border border-gray-300 rounded-md"
//         />
//         <input
//           type="email"
//           placeholder="Enter Your Email ID"
//           className="w-full p-2 border border-gray-300 rounded-md"
//         />
//         <textarea
//           placeholder="How may we help you?"
//           className="w-full p-4 border border-gray-300 rounded-md h-24"
//         ></textarea>
//         <button className="w-full bg-black text-white p-2 rounded-md cursor-pointer">Submit</button>
//       </form>
//     </div>
//   );
// };
  

// export default Contact;