import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <div>
          <div
            className="relative flex items-center justify-center h-screen bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://t4.ftcdn.net/jpg/08/45/58/95/360_F_845589510_QmbsMXwCXhQG2jrEHLrhIzQqdo1EeFe3.jpg')",
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
                When other scents speak, yours should {" "}
                <span className="underline text-2xl">brag</span>
              </p>
              <button className="mt-6 px-6 py-3 bg-clay text-white font-semibold text-sm uppercase rounded hover:bg-opacity-80 transition">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <div className="bg-punga text-white py-12 px-6 md:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 tracking-wide">
            What You Get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-clay rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Premium Quality</h3>
              <p className="text-sm md:text-base font-verdana">
                All our products are crafted with the finest ingredients,
                ensuring a luxurious experience every time.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-clay rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Affordable Luxury</h3>
              <p className="text-sm md:text-base font-verdana">
                Experience the indulgence of premium scents without breaking the
                bank.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-clay rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">
                Customer Satisfaction
              </h3>
              <p className="text-sm md:text-base font-verdana">
                We prioritize your happiness, offering unparalleled customer
                service and a seamless shopping experience.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button className="px-8 py-3 bg-white text-punga font-semibold rounded-full shadow-md hover:bg-opacity-90 transition">
              Shop Now
            </button>
          </div>
        </div>

        <div className="bg-bush text-punga py-12 px-6 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-wide mb-4">
              Our Journey So Far
            </h2>
            <p className="text-lg md:text-xl font-verdana font-medium text-gray-600">
              Celebrating milestones, serving smiles, and creating memories.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Stat 1 */}
            <div className="p-6 bg-clay text-white rounded-lg shadow-lg text-center">
              <h3 className="text-4xl font-extrabold mb-2">10K+</h3>
              <p className="text-lg font-semibold">Happy Customers</p>
            </div>
            {/* Stat 2 */}
            <div className="p-6 bg-clay text-white rounded-lg shadow-lg text-center">
              <h3 className="text-4xl font-extrabold mb-2">50K+</h3>
              <p className="text-lg font-semibold">Products Delivered</p>
            </div>
            {/* Stat 3 */}
            <div className="p-6 bg-clay text-white rounded-lg shadow-lg text-center">
              <h3 className="text-4xl font-extrabold mb-2">5+</h3>
              <p className="text-lg font-semibold">Years in Business</p>
            </div>
          </div>

          {/* Inspirational Text Section */}
          <div className="relative bg-punga text-white rounded-lg p-6 shadow-lg">
            {/* Decorative Icon */}
            <div className="absolute -top-6 left-6 bg-white text-punga text-3xl font-bold rounded-full h-12 w-12 flex items-center justify-center shadow-md">
              💡
            </div>
            <p className="text-lg md:text-xl italic font-verdana">
              &quot;What started as a small passion project has grown into a thriving
              business. We began with a dream to create premium scents that
              speak louder than words. Today, we’re proud to have touched
              countless lives with our products. Thank you for being part of our
              journey!&quot;
            </p>
          </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default Home;
