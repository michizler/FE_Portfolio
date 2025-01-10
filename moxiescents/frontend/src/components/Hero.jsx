import heroImage from "../assets/hero-img.jpg";

const Hero = () => (
    <div
    className="relative flex items-center justify-center h-screen bg-cover bg-center"
    style={{
      backgroundImage: `url(${heroImage})`,
    }}
  >
    {/* Overlay for better text readability */}
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

    {/* Foreground text */}
    <div className="relative text-center text-white z-10">
      <h1 className="text-4xl md:text-6xl font-bold tracking-wider">
        Welcome to MoxieScents
      </h1>
      <p className="mt-4 text-lg md:text-xl italic font-medium">
        When other scents speak, yours should{" "}
        <span className="underline text-2xl">brag</span>
      </p>
      <button className="mt-6 px-6 py-3 bg-clay text-white font-semibold text-sm uppercase rounded hover:bg-opacity-80 transition">
        Shop Now
      </button>
    </div>
  </div>
);

export default Hero;