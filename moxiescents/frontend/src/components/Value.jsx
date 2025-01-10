

const Value = () => (
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
);

export default Value;