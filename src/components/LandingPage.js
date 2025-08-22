import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center px-10 py-6 shadow-md bg-white">
        <h1 className="text-2xl font-bold text-red-500">Foody</h1>
        <nav className="flex gap-8">
          <button onClick={() => navigate("/home")} className="text-gray-700 hover:text-red-500">Home</button>
          <button onClick={() => navigate("/home/about")} className="text-gray-700 hover:text-red-500">About Us</button>
          <button onClick={() => navigate("/home/contact")} className="text-gray-700 hover:text-red-500">Contact</button>
        </nav>
        <button className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600">
          Sign Up
        </button>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col md:flex-row items-center justify-between px-12 py-16">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            it’s not just <br /> Food, It’s an <br /> Experience.
          </h1>
          <div className="mt-6 flex gap-4">
            <button 
              onClick={() => navigate("/home")} 
              className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"
            >
              View Menu
            </button>
            <button className="border px-6 py-3 rounded-lg text-gray-700 hover:bg-gray-100">
              Book a Table
            </button>
          </div>
        </div>

        <div className="mt-10 md:mt-0">
          <img 
            src="https://static.vecteezy.com/system/resources/previews/022/176/800/non_2x/cute-white-bear-3d-animation-created-by-generative-ai-technology-free-photo.jpg"
            alt="Food Bowl"
            className="w-[450px] rounded-lg shadow-lg"
          />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
