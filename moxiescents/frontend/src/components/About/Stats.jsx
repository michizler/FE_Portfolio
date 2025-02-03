import { FaUsers, FaBoxOpen, FaBusinessTime } from "react-icons/fa";

const Stats = () => (
  <section className=" py-8">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      {/* Card 1 */}
      <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="bg-clay text-white p-4 rounded-full mb-4">
          <FaUsers size={32} />
        </div>
        <h2 className="text-4xl font-extrabold text-dark-brown mb-2">8K+</h2>
        <p className="text-lg text-gray-600">Global Customers</p>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="bg-clay text-white p-4 rounded-full mb-4">
          <FaBoxOpen size={32} />
        </div>
        <h2 className="text-4xl font-extrabold text-dark-brown mb-2">12K+</h2>
        <p className="text-lg text-gray-600">Products Delivered</p>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="bg-clay text-white p-4 rounded-full mb-4">
          <FaBusinessTime size={32} />
        </div>
        <h2 className="text-4xl font-extrabold text-dark-brown mb-2">10+</h2>
        <p className="text-lg text-gray-600">Years in Business</p>
      </div>
    </div>
  </section>
);

export default Stats;
