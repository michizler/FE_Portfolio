

const Impact = () => (
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
              &quot;What started as a small passion project has grown into a
              thriving business. We began with a dream to create premium scents
              that speak louder than words. Today, we’re proud to have touched
              countless lives with our products. Thank you for being part of our
              journey!&quot;
            </p>
          </div>
        </div>
);

export default Impact;