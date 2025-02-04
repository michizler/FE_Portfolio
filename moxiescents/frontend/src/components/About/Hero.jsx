import aboutImage from "../../assets/about-img.jpg";

const Hero = () => (
  <section className="py-8">
    <div
      className="container mx-auto text-center relative bg-cover bg-center h-48 md:h-64 lg:h-80 rounded-lg overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url(${aboutImage})`,
        zIndex: 0, // Set the z-index of the image background
      }}
    >
      {/* Add an overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-20 z-0"></div>
      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-punga mb-2">About Us</h1>
        <p className="text-xl text-black text-verdana">
          Your Partner in Scents <span className="font-bold">Discovery</span>
        </p>
      </div>
    </div>
  </section>
);

export default Hero;
