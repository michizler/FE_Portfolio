import { TbTargetArrow } from "react-icons/tb";

const Mission = () => (
  <section className="py-16">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Icon Section */}
      <div className="md:order-2 flex items-center justify-center text-clay h-32 md:h-40">
        <TbTargetArrow className="text-8xl md:text-9xl" />
      </div>
      {/* Text Section */}
      <div className="md:order-1 flex flex-col items-center justify-center text-center md:text-left">
        <h2 className="text-4xl font-bold text-clay mb-6">Our Mission</h2>
        <p className="text-lg text-gray-600 leading-relaxed font-semibold">
          At the heart of everything we do, our mission is to deliver
          exceptional quality and bring joy to our customers through innovative
          and natural products. We believe in sustainability, care, and
          continuous growth to make a difference.
        </p>
        <button className="mt-6 px-6 py-2 text-white bg-clay rounded-lg shadow-md hover:bg-driftwood transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  </section>
);

export default Mission;
