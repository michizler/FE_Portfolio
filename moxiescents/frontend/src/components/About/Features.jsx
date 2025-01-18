import { FaLeaf, FaRegStar, FaShieldAlt, FaHandsWash, FaTint } from "react-icons/fa";

const features = [
  {
    icon: <FaTint size={32} />,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    icon: <FaLeaf size={32} />,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    icon: <FaShieldAlt size={32} />,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    icon: <FaHandsWash size={32} />,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    icon: <FaRegStar size={32} />,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

const Features = () => (
  <section className="py-8">
    <div className="container mx-auto text-center bg-driftwood ">
      <h2 className="text-3xl font-bold text-white py-4 mb-8">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="bg-punga text-white p-4 rounded-full mb-4">{feature.icon}</div>
            <p className="text-lg text-gray-600">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
