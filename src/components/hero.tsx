
const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gradient-to-b from-gray-900 via-gray-800 to-black">
    <div className="w-full max-w-4xl p-8 text-center">

  
      <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-transparent uppercase bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 md:text-6xl drop-shadow-xl">
        Welcome to CSSCraft
      </h1>
      <p className="mb-6 text-lg font-medium text-gray-300 md:text-xl drop-shadow-sm">
        The funnest multiplayer game with 300k+ web designers & developers.
        Replicate the target images using CSS - the shorter your code, the
        higher your score! Happy coding!
      </p>
      <div className="mt-8">
        <a
          href="/getstart"
          className="inline-block px-8 py-4 text-lg font-semibold text-white transition duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 hover:shadow-xl"
        >
          Get Started
        </a>
      </div>
    </div>
  
    <div className="w-full max-w-4xl px-8 mt-16">
      <div className="flex flex-col items-center justify-between mb-6 md:flex-row">
        <h2 className="text-3xl font-semibold text-gray-300 md:text-4xl drop-shadow-lg">
          Daily Targets
        </h2>
        <a
          href="#view-all"
          className="text-lg text-indigo-400 transition duration-300 hover:text-blue-300 hover:underline hover:underline-offset-8"
        >
          View All Targets
        </a>
      </div>
      <p className="mb-6 font-light text-gray-300 text-md md:text-lg">
        A new target every day for you to unwind. No leaderboards, no
        competition.
      </p>
      {/* carts challange */}
      <div className="grid grid-cols-1 gap-6 px-4 py-8 md:grid-cols-2 lg:grid-cols-4">
      {["AUG 2", "AUG 3", "AUG 4", "AUG 5"].map((date, index) => (
        <div
          key={index}
          className="p-4 text-center transition-transform duration-300 transform bg-gray-800 rounded-lg hover:-translate-y-1 hover:shadow-2xl hover:scale-105"
        >
          <p className="mb-2 text-xl font-semibold text-yellow-400">{date}</p>
          <div className="relative w-full h-32 mb-2 overflow-hidden transition-transform duration-300 transform bg-gray-700 rounded-lg cursor-pointer hover:-rotate-1">
            <img
              src="/img/cart1.png"
              alt="Cart Image"
              className="absolute object-cover w-full h-full"
            />
            <span className="absolute px-6 py-1 font-bold text-white transition-all duration-200 transform -translate-x-1/2 bg-black bg-opacity-50 rounded bottom-2 left-1/2 hover:bg-opacity-75">
              Play Now
            </span>
          </div>
          <p className="text-sm font-light text-gray-400">Your hi-scoree</p>
        </div>
      ))}
      {/* after carts */}
      
    </div>
    </div>
  </div>
  
  

  );
};

export default Hero;
